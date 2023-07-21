export default function Label({ htmlFor, children }: { htmlFor: string, children: string }) {

    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm">
            {children}
        </label>
    )
}