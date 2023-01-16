import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter, createContext } from './trpc';

const app = express();

app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(8080);