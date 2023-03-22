import Image from "next/image"

type Props = {
  imgSrc: string
  title: string
}

export default function IconWithText({ imgSrc, title }: Props) {
  console.log(imgSrc)
  return (
    <figure>
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
