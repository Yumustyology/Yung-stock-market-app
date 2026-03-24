import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import { nextCookies} from "better-auth/next-js";
import { dash } from "@better-auth/infra";

const createAuthInstance = (db: NonNullable<Awaited<ReturnType<typeof connectToDatabase>>["connection"]["db"]>) => {
    return betterAuth({
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [
            dash({ apiKey: process.env.BETTER_AUTH_API_KEY }),
            nextCookies(),
        ],
    });
};

type BetterAuthInstance = ReturnType<typeof createAuthInstance>;

// singleton instance
let authInstance: BetterAuthInstance | undefined;

export const getAuth = async (): Promise<BetterAuthInstance> => {
    if (authInstance) {
        return authInstance;
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) throw new Error('MongoDB connection not found');

    const instance = createAuthInstance(db);

    authInstance = instance;
    return instance;
}

// Lazy auth facade to avoid DB initialization at module-load time.
// This improves build/deploy stability for routes that import auth helpers but
// do not need a live DB connection during static analysis.
type AuthApiMethod = (...args: any[]) => Promise<any>;

const withAuth = (method: string): AuthApiMethod => {
    return async (...args: any[]) => {
        const instance = await getAuth();
        const fn = (instance.api as any)?.[method];
        if (typeof fn !== 'function') {
            throw new Error(`Auth API method not found: ${method}`);
        }
        return fn(...args);
    };
};

export const auth = {
    api: {
        getSession: withAuth('getSession'),
        signUpEmail: withAuth('signUpEmail'),
        signInEmail: withAuth('signInEmail'),
        signOut: withAuth('signOut'),
    },
} as const;