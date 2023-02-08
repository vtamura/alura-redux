import React, { ChangeEvent } from 'react'

interface SelectProps {
    label: string
    required: boolean
    options: {
        id: string
        value: string
        label: string
    }[]
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
    required,
    value,
    label,
    options,
    name,
    onChange,
}: SelectProps) => {
    return (
        <div className="grid mb-6">
            <label className="text-lg text-gray-700 mb-2" htmlFor="">
                {label}
            </label>
            <select
                name={name}
                required={required}
                className="outline-none px-4 py-2 border-[1px] rounded-md"
                value={value}
                onChange={onChange}
            >
                <option value="" disabled>
                    Selecione uma categoria
                </option>
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
