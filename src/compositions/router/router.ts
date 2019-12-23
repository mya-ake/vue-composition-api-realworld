import { inject } from '@vue/composition-api';
import VueRouter from 'vue-router';
import { ROUTER } from '@/plugins/provider-key';

export const useRouter = (): { router: VueRouter } => {
  const router = inject<VueRouter>(ROUTER) as VueRouter;
  return { router };
};
