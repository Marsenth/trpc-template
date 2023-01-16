import { procedure, router } from '../trpc';

const aboutRouter = router({
  about: procedure.query(() => 'About us')
});

export default aboutRouter;
