import styles from "@/styles/global/ErrorMessage.module.scss"

type Props = {
  title: string
  type?: "error" | "success"
}

export default function ErrorMessage({title, type}: Props) {
  const typeClass = type === "error" ? styles.error : styles.success

  return <div className={typeClass}>
    <p>{title}</p>
  </div>
}