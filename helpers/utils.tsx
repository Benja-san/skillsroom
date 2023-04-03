import { ProjectModel } from "@/models/ProjectModel"
import variables from "@/styles/_export.module.scss"

export const textWithLetterColored = (text: string) => {
  // Get the position of second alphanumeric character from the end of the string
  const stringWithoutSpaces = text.replace(/[\W_]+/g, "")
  const stringLength = stringWithoutSpaces.length
  const coloredCharacter = stringWithoutSpaces.charAt(stringLength - 2)
  const coloredCharacterPosition = text.lastIndexOf(coloredCharacter)

  const style = {
    color: variables.tertiaryColor,
  }

  return (
    <>
      {text.substring(0, coloredCharacterPosition)}
      <span style={style}>{coloredCharacter}</span>
      {text.substring(coloredCharacterPosition + 1, text.length)}
    </>
  )
}

export const phoneMask = (phone: number) => {
  const phoneToString = phone.toString()
  return phoneToString.replace(/(.{3})/g, "$1 ")
}

export const promotedProjectsByCategory = (
  projects: Array<ProjectModel>,
  categoryType: string
) => {
  // projects filtered by categoryType where categories is an array of strings and isPromoted

  return projects.filter(
    (project) => project.categories.includes(categoryType) && project.isPromoted
  )
}
