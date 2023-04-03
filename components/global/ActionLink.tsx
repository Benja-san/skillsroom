import styles from "@/styles/global/ActionLink.module.scss"
import { FunctionComponent } from "react"

type Props = {
  title: string
}

const ActionLink: FunctionComponent<Props> = ({ title }) => {

  const textWithLetterColored = (text : string) => {
    // Get the position of second alphanumeric character from the end of the string
    const stringWithoutSpaces = text.replace(/[\W_]+/g, '')
    const stringLength = stringWithoutSpaces.length
    const coloredCharacter = stringWithoutSpaces.charAt(stringLength - 2)
    const coloredCharacterPosition = text.lastIndexOf(coloredCharacter)

    return <div className={styles.container}>
      {text.substring(0, coloredCharacterPosition)}
      <span>{coloredCharacter}</span>
      {text.substring(coloredCharacterPosition +1, text.length)}
    </div>

  }

  return textWithLetterColored(title)
}

export default ActionLink