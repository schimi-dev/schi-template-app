export default function TextArea({
    id,
    name,
    rows = 4,
    defaultValue = "",
    required = false,
    minLength,
    maxLength,
}: {
    id: string,
    name: string,
    rows?: number,
    defaultValue?: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
}) {

    return (
        <textarea
            id={id}
            name={name}
            rows={rows}
            defaultValue={defaultValue}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            spellCheck={false}
            autoComplete="off"
            className="border text-sm rounded block w-full dark:bg-[rgba(0,0,0,0.2)] border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.2)] dark:hover:border-[rgba(255,255,255,0.3)] focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 px-3 py-2"
        />
    )
}