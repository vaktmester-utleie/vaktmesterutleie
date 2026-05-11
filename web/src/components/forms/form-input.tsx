import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

type Props = {
  label: string
  htmlFor: string
  type?: 'text' | 'password' | 'tel' | 'email'
  placeholder?: string
  error?: string
}

export default function FormInput({
  label,
  type = 'text',
  htmlFor,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <Field>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <Input placeholder={placeholder} type={type} {...rest} />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </Field>
  )
}
