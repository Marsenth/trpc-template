import { procedure, router } from '../trpc';

const servicesRouter = router({
  services: procedure.query(() => 'Our services')
});

export default servicesRouter;
