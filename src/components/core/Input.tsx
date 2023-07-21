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
                "border text-sm rounded-md block w-full bg-neutral-950 border-neutral-500 focus:outline-none focus:border-primary-400 p-3" :
                "border text-sm rounded-md block w-full bg-neutral-950 border-neutral-500 focus:outline-none focus:border-primary-400 p-2"
            }
        />
    )
}