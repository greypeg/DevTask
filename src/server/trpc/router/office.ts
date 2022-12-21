import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const officeRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.office.findMany();
  }),
});
