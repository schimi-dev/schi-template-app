'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import Button from './Button';

export default function Submit({
    children,
    danger = false,
}: {
    children: string,
    danger?: boolean,
}) {

    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            pending={pending}
            danger={danger}
        >
            {children}
        </Button>
    )
}
