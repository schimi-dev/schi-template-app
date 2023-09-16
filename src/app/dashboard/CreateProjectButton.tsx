'use client'

import Button from "@/components/core/Button"
import Modal from "@/components/core/Modal"
import { ReactNode, useState } from "react"

export default function CreateProjectButton({ children }: { children: ReactNode }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                New project
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="New project"
            >
                {children}
            </Modal>
        </>
    )
}
