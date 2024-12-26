import { Control, Controller, FieldError } from "react-hook-form"
import './CustomImput.css'
import { FormValues } from "../models"

interface Props {
  name: keyof FormValues
  control: Control<FormValues>
  label: string
  type?: string
  error?: FieldError
}

export const InputForm = ({name, control, label, type = "text", error}: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({field}) =>
          <input id={name} {...field} type={type} className={`form-control ${error ? "is-invalid" : ""}`} />}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  )
}

