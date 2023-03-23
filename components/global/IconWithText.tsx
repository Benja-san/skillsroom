import Image from "next/image"
import styles from "@/styles/global/IconWithText.module.scss"

type Props = {
  imgSrc: string
  title: string
}

export default function IconWithText({ imgSrc, title }: Props) {

  return (
    <figure className={styles.container}>
      <Image
        width={20}
        height={20}
        src={`/icons/${imgSrc}`}
        alt={title}
      />
      <figcaption>{title}</figcaption>
    </figure>
  )
}
