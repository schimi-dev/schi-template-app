export default function Input({
    id,
    name,
    defaultValue = "",
    large = false,
    autoFocus=false,
    required = false,
    minLength,
    maxLength,
    pattern
}: {
    id: string,
    name: string,
    defaultValue?: string,
    large?: boolean,
    autoFocus?: boolean,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp
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
            pattern={pattern?.toString()}
            type="text"
            spellCheck={false}
            autoComplete="off"
            className={large ?
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.3)] focus:outline-none focus:border-primary-500 p-3" :
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.3)] focus:outline-none focus:border-primary-500 p-2"
            }
        />
    )
}