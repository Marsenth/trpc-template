import { procedure, router } from '../trpc';

const teamRouter = router({
  team: procedure.query(() => 'Our team')
});

export default teamRouter;
