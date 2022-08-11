import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input = ({ id, name, ...props }: InputProps) => {
  return (
    <input id={id} name={name} {...props} className="pr-3 pl-10 m-2 bg-transparent rounded-md w-full border border-slate-600 placeholder-gray-500 dark:text-gray-200 outline-none focus:ring-[#9900ef] focus:border-[#9900ef] sm:text-md"  />
  )
}

export default Input