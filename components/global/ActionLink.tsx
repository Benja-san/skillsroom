import { textWithLetterColored } from "@/helpers/utils"
import styles from "@/styles/global/ActionLink.module.scss"
import { FunctionComponent } from "react"

type Props = {
  title: string
}

const ActionLink: FunctionComponent<Props> = ({ title }) => {
  return <div className={styles.container}>{textWithLetterColored(title)}</div>
}

export default ActionLink