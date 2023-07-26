import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

export default function Modal({ open, onClose, title, description, children }: { open: boolean, onClose: () => void, title: string, description?: string, children?: ReactNode }) {

    return (
        <Dialog open={open} onClose={onClose}>
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-20" aria-hidden="true" />
            {/* Full-screen container to center the panel */}
            <div className="z-50 fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="border shadow-2xl bg-white dark:bg-secondary-900 border-secondary-300 dark:border-secondary-800 rounded-md p-6 flex flex-col gap-4 w-full max-w-xl">
                    <Dialog.Title className="text-xl font-medium flex items-center gap-2">
                        {title}
                        <button onClick={onClose} className="ml-auto p-2 -mr-2 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800">
                            <MdClose className="h-5 w-5 text-secondary-600 dark:text-white" />
                        </button>
                    </Dialog.Title>
                    {description && <Dialog.Description className="text-sm">
                        {description}
                    </Dialog.Description>}
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}