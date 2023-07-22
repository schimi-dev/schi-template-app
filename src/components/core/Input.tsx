export default function Input({
    id,
    name,
    defaultValue = "",
    large = false,
    required = false,
    minLength,
    maxLength,
    pattern
}: {
    id: string,
    name: string,
    defaultValue?: string,
    large?: boolean,
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
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern?.toString()}
            type="text"
            spellCheck={false}
            autoComplete="off"
            className={large ?
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.3)] border-neutral-600 focus:outline-none focus:border-primary-500 p-3" :
                "border text-sm rounded block w-full bg-[rgba(0,0,0,0.3)] border-neutral-600 focus:outline-none focus:border-primary-500 p-2"
            }
        />
    )
}