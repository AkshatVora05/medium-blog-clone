import type { ChangeEvent } from "react";

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
  required?: boolean;
}

export const LabelledInput = ({ label, placeholder, onChange, type = "text", required = false}: LabelledInputProps) => {
    return <div className="mt-4">
        <label className="block mb-2 text-sm font-semibold text-black">{label}</label>
        <input onChange={onChange} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:border-black" placeholder={placeholder} required={required} />
    </div>
}