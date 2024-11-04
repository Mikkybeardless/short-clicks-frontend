import { InputProps } from "@/app/types"

const Input = ({ label, name, type, ...rest }: InputProps) => {
  return (
    <>
      <label className="label" htmlFor={name}>
        <span className="label-text text-base-100">{label}</span>
      </label>
        <input
        id={name}
        name={name}
        type={type}
        {...rest}
      />
    </>
  )
}

export default Input
