import { InputFieldModel } from "@/models/InputFieldModel"
import { useForm } from "react-hook-form"
import styles from "@/styles/global/InputField.module.scss"

export default function InputField(inputField: InputFieldModel) {
  const { register } = useForm()

  const inputDisplay = (inputType: string) => {
    switch (inputType) {
      case "select":
        return (
          <select
            id={inputField.name}
            required={inputField.isRequired}
            {...register(inputField.name, {
              required: inputField.isRequired,
              minLength: inputField.minLength,
              maxLength: inputField.maxLength,
              pattern: inputField.pattern,
            })}
          >
            {inputField.options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case "textarea":
        return (
          <textarea
            id={inputField.name}
            placeholder={inputField.placeholder}
            {...register(inputField.name, {
              required: inputField.isRequired,
              minLength: 2,
              maxLength: 20,
            })}
          />
        )
      default:
        return (
          <input
            type={inputField.type}
            id={inputField.name}
            placeholder={inputField.placeholder}
            {...register(inputField.name, {
              required: inputField.isRequired,
              minLength: inputField.minLength,
              maxLength: inputField.maxLength,
              pattern: inputField.pattern,
            })}
          />
        )
    }
  }

  return (
    <div className={styles.inputFieldContainer}>
      <label htmlFor={inputField.name}>
        {inputField.label} {inputField.isRequired && "*"}
      </label>
      {inputDisplay(inputField.type)}
    </div>
  )
}
