// useRouter.js
import { useRouter } from 'vue-router';

const router = useRouter();

export const handleRouter = (link) => {
  router.push(link);
};
