import { HTMLInputTypeAttribute } from "react"

export interface InputFieldModel {
  name: string
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute | "textarea"
  isRequired: boolean
  minLength: number
  maxLength: number
  pattern: RegExp
  options?: Array<{ value: string; label: string }>
}