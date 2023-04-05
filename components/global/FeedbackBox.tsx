import styles from "@/styles/global/FeedbackBox.module.scss"
import LoaderIcon from "./LoaderIcon"

type Props = {
  title: string
  type?: "error" | "success" | "loading" | "loaded" | null
}

export default function FeedbackBox({ title, type }: Props) {
  return (
    <div className={styles.feedbackBox}>
      <div className={styles.iconContainer}>
        <LoaderIcon type={type} />
      </div>
      <p>{title}</p>
    </div>
  )
}
