export default function TextArea({
    id,
    name,
    rows = 4,
    defaultValue = "",
    large = false,
    required = false,
    minLength,
    maxLength,
}: {
    id: string,
    name: string,
    rows?: number,
    defaultValue?: string,
    large?: boolean,
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
            className={large ?
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.3)] border-neutral-600 focus:outline-none focus:border-primary-500 p-3" :
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.3)] border-neutral-600 focus:outline-none focus:border-primary-500 p-2"
            }
        />
    )
}