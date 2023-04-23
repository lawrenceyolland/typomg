import { createTRPCRouter } from "~/server/api/trpc";
import { scoreRouter } from "./routers/scores";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  scores: scoreRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
