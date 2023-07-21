import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function useNoSsr() {
    const [init, setInit] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setInit(true);
    }, [])

    return init;
}