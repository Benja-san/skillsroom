import styles from "@/styles/global/FeedbackBox.module.scss"
import LoaderIcon from "./LoaderIcon"
import { FunctionComponent } from "react"

type Props = {
  title: string
  type?: "error" | "success" | "loading" | "loaded" | null
}

const FeedbackBox : FunctionComponent<Props> = ({ title, type }) => {
  return (
    <div className={styles.feedbackBox}>
      <div className={styles.iconContainer}>
        <LoaderIcon type={type} />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default FeedbackBox
