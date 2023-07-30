'use client'

import useProjectParam from "@/hooks/useProjectParam";

export default function Seperator() {
    const projectParam = useProjectParam();

    // Returning `null` is a suitable approach because functionality that is only available in Client Components is needed to detect if this component should be rendered.
    // That way, the header of the app can remain a Server Component and this component can detect based on the dynamic params if it should render anything.
    // Moreover, this component is intended to be only used in the header of the app which mitigates the fact that returning `null` might surprise a developer trying to render it.
    // https://legacy.reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
    // https://react.dev/learn/conditional-rendering#conditionally-returning-nothing-with-null
    // https://nextjs.org/docs/getting-started/react-essentials#moving-client-components-to-the-leaves
    if (!projectParam)
        return null;

    return (
        <span className="text-secondary-300 dark:text-secondary-700 flex items-center justify-center text-4xl font-thin" >
            /
        </span>
    )
}
