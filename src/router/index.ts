import { mergeRouters } from '../trpc';
import aboutRouter from './about';
import homeRouter from './home';
import servicesRouter from './services';
import teamRouter from './team';
 
const appRouter = mergeRouters(
  aboutRouter,
  homeRouter,
  servicesRouter,
  teamRouter
);

export default appRouter;
