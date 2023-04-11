import styles from "@/styles/global/LoaderIcon.module.scss"
import { FunctionComponent } from "react"

type Props = {
  type: "success" | "error" | "loaded" | "loading" | null | undefined
}

const LoaderIcon: FunctionComponent<Props> = ({ type }) => {
  return (
    <div
      className={`
      ${styles.circleLoader} 
      ${(type === "error" || type === "success") && styles.loadComplete} 
      ${type === "error" && styles.error}
    `}
    >
      <div
        className={`${styles.checkmark} ${styles.draw} ${
          type === "success" && styles.displayed
        }`}
      ></div>
      <div
        className={`${styles.errorCross} ${styles.draw} ${
          type === "error" && styles.displayed
        }`}
      ></div>
    </div>
  )
}

export default LoaderIcon
