'use client'

import Button from "@/components/core/Button"
import Modal from "@/components/core/Modal"
import Submit from "@/components/core/Submit"
import { deleteProjectAction } from "@/server/lib/project/actions"
import { TProject } from "@/types/project"
import { useState } from "react"

export default function DeleteProjectButton({ project }: { project: TProject }) {

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
                <form
                    className="flex items-center justify-end"
                    action={deleteProjectAction}
                >
                    <input type="hidden" name="id" defaultValue={project.id} />
                    <Submit danger>
                        Yes, delete
                    </Submit>
                </form>
            </Modal>
        </>
    )
}