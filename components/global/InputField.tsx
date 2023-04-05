import { InputFieldModel } from "@/models/InputFieldModel"
import { FieldError } from "react-hook-form"
import styles from "@/styles/global/InputField.module.scss"

type Props = {
  inputField: InputFieldModel
  register: any
  error?: FieldError
  errorMessages: { [key: string]: string }
}

export default function InputField({
  inputField,
  register,
  error,
  errorMessages,
}: Props) {

  const selectValidation = (value: string) => {
    const arrayOfOptionsValue = inputField.options?.map(
      (option) => option.value
    )
    return arrayOfOptionsValue?.includes(value)
  }

  const inputDisplay = (inputType: string) => {
    switch (inputType) {
      case "select":
        return (
          <div>
            <select
              id={inputField.name}
              {...register(inputField.name, {
                required: inputField.isRequired,
                minLength: inputField.minLength,
                maxLength: inputField.maxLength,
                validate: (value: string) => selectValidation(value),
              })}
            >
              <option disabled selected value="">-- {inputField.placeholder} --</option>
              {inputField.options?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && error.type === "validate" && (
              <p className="error">{errorMessages.incorrectSelectValue}</p>
            )}
          </div>
        )
      case "textarea":
        return (
          <textarea
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
              pattern: new RegExp(inputField.pattern),
            })}
          />
        )
    }
  }

  return (
    <div className={styles.inputField}>
      <div className={styles.inputFieldContainer}>
        <label htmlFor={inputField.name}>
          {inputField.label} {inputField.isRequired && "*"}
        </label>
        {inputDisplay(inputField.type)}
      </div>

      {error && error.type === "required" && (
        <p className={styles.error}>{errorMessages.required}</p>
      )}
      {error && inputField.type === "email" && error.type === "pattern" && (
        <p className={styles.error}>{errorMessages.email}</p>
      )}
      {error && inputField.type === "phone" && error.type === "pattern" && (
        <p className="error">{errorMessages.phone}</p>
      )}
      {error && error.type === "minLength" && (
        <p className={styles.error}>{errorMessages.minLength}</p>
      )}
      {error && error.type === "maxLength" && (
        <p className={styles.error}>{errorMessages.maxLength}</p>
      )}
      {error &&
        error.type === "pattern" &&
        inputField.name === ("firstname" || "lastname" || "status") && (
          <p className={styles.error}>{errorMessages.onlyLetters}</p>
        )}
    </div>
  )
}
