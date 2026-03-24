import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'signalist',
    eventKey: process.env.INNGEST_EVENT_KEY || 'local',
    baseUrl: process.env.INNGEST_BASE_URL,
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})
