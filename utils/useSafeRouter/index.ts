import { useRouter } from "next/router";

// Wrapper around next/router that allows for safely pushing a new route without handling if the route is the current one
const useSafeRouter = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const push = (path: string) => pathname !== path && router.push(path);
  return {
    push: push,
  };
};

export default useSafeRouter;
