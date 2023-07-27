export default function Label({ htmlFor, children }: { htmlFor: string, children: string }) {

    return (
        <label htmlFor={htmlFor} className="text-secondary-700 dark:text-secondary-300 block px-0.5 mb-1 text-sm font-medium">
            {children}
        </label>
    )
}