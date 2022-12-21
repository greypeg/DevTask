import { router } from "../trpc";
import { authRouter } from "./auth";
import { officeRouter } from "./office";

export const appRouter = router({
  office: officeRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
