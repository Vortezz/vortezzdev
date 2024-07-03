/* Imported from https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect */
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useInterval(callback: () => void, delay: number | null) {
	const savedCallback = useRef(callback);

	useIsomorphicLayoutEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!delay && delay !== 0) {
			return;
		}

		const id = setInterval(() => savedCallback.current(), delay);
		return () => clearInterval(id);
	}, [delay]);
}