import { ChangeEvent } from 'react'
interface InputProps {
    id: string
    name: string
    label: string
    required: boolean
    value: string
    type: 'text' | 'number'
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
    id,
    name,
    label,
    required,
    value,
    type,
    onChange,
}: InputProps) => {
    return (
        <div className="grid mb-6">
            <label className="text-lg text-gray-700 mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                required={required}
                name={name}
                className="outline-none px-4 py-2 border-[1px] rounded-md"
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}
