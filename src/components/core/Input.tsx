export default function Input({
    id,
    name,
    defaultValue = "",
    autoFocus=false,
    required = false,
    minLength,
    maxLength,
    pattern
}: {
    id: string,
    name: string,
    defaultValue?: string,
    autoFocus?: boolean,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: string
}) {

    return (
        <input
            id={id}
            name={name}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            type="text"
            spellCheck={false}
            autoComplete="off"
            className="border text-sm rounded block w-full dark:bg-[rgba(0,0,0,0.2)] border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.2)] dark:hover:border-[rgba(255,255,255,0.3)] focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 px-3 py-2"
        />
    )
}