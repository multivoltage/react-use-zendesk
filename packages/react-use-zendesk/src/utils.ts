import { useEffect, useLayoutEffect } from "react";

export const isSSR = typeof window === "undefined";

// useLayoutEffect warns when rendered on the server, where no effect runs anyway.
export const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;
