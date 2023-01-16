import { procedure, router } from '../trpc';

const homeRouter = router({
  home: procedure.query(() => 'Application home')
});

export default homeRouter;
