'use client'

import Button from "@/components/core/Button"
import Modal from "@/components/core/Modal"
import { ReactNode, useState } from "react"

export default function DeleteProjectButton({ children }: { children: ReactNode }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button danger onClick={() => setOpen(true)}>
                Delete this project
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Delete project"
                description="Do you want to delete this project?"
            >
                {children}
            </Modal>
        </>
    )
}
