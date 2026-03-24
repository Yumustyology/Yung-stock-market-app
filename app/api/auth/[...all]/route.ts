import { toNextJsHandler } from "better-auth/next-js";
import { getAuth } from "@/lib/better-auth/auth";

const getHandler = async () => {
  const auth = await getAuth();
  const { GET, POST } = toNextJsHandler(auth);
  return { GET, POST };
};

export const GET = async (request: Request) => {
  const handler = await getHandler();
  return handler.GET(request);
};

export const POST = async (request: Request) => {
  const handler = await getHandler();
  return handler.POST(request);
};
