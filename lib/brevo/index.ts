import {
    NEWS_SUMMARY_EMAIL_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE,
} from "@/lib/email/templates";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const getBrevoHeaders = () => {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
        throw new Error("BREVO_API_KEY is not configured");
    }

    return {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
    };
};

const getSender = () => {
    const email = process.env.BREVO_SENDER_EMAIL;
    const name = process.env.BREVO_SENDER_NAME || "Signalist";

    if (!email) {
        throw new Error("BREVO_SENDER_EMAIL is not configured");
    }

    return { email, name };
};

const sendBrevoEmail = async ({
    to,
    subject,
    htmlContent,
    textContent,
}: {
    to: { email: string; name?: string }[];
    subject: string;
    htmlContent: string;
    textContent: string;
}) => {
    const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: getBrevoHeaders(),
        body: JSON.stringify({
            sender: getSender(),
            to,
            subject,
            htmlContent,
            textContent,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        throw new Error(`Brevo email request failed (${response.status}): ${errorText}`);
    }

    return response.json().catch(() => null);
};

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace("{{name}}", name)
        .replace("{{intro}}", intro);

    await sendBrevoEmail({
        to: [{ email, name }],
        subject: "Welcome to Signalist - your stock market toolkit is ready!",
        htmlContent: htmlTemplate,
        textContent: "Thanks for joining Signalist.",
    });
};

export const sendNewsSummaryEmail = async ({
    email,
    date,
    newsContent,
}: {
    email: string;
    date: string;
    newsContent: string;
}): Promise<void> => {
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
        .replace("{{date}}", date)
        .replace("{{newsContent}}", newsContent);

    await sendBrevoEmail({
        to: [{ email }],
        subject: `Market News Summary Today - ${date}`,
        htmlContent: htmlTemplate,
        textContent: `Today's market news summary from Signalist.`,
    });
};
