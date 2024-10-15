import { InputProps } from "@/app/types"

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <>
      <label className="label" htmlFor={name}>
        <span className="label-text text-base-100">{label}</span>
      </label>
        <input
        id={name}
        name={name}
        type={name}
        {...rest}
      />
    </>
  )
}

export default Input
