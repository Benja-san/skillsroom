import Image from "next/image"
import styles from "@/styles/global/IconWithText.module.scss"
import { FunctionComponent } from "react"

type Props = {
  imgSrc: string
  title: string
}

const IconWithText: FunctionComponent<Props> = ({ imgSrc, title }) => {

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

export default IconWithText