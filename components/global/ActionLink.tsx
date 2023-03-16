import styles from "@/styles/global/ActionLink.module.scss"

type Props = {
  title: string
}

export default function ActionLink({ title }: Props) {
  return <div className={styles.container}>{title}</div>
}
