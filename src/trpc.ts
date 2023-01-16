import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

// created for each request
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();
export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const procedure = t.procedure;
export const router = t.router;

export { default as appRouter } from './router';
