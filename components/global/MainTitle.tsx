import styles from "@/styles/global/MainTitle.module.scss"

type Props = {
  title: string
}

export default function MainTitle({title} : Props) {
  return (
    <h1 className={styles.mainTitle}>{title}</h1>
  )
}