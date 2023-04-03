import Link from "next/link"
import styles from '@/styles/layout/Header.module.scss'
import { NextFontWithVariable } from "next/dist/compiled/@next/font"

type Props = {
    onClick: () => void
    font: NextFontWithVariable
  }

export default function Header({onClick, font}: Props) {

    return <header className={styles.header}>
        <Link href="/" legacyBehavior>
            <a className={`${styles.logo} ${font.variable}`}>Sk<span>i</span>lls R<span>o</span>om</a>
        </Link>
        <div className={styles.menu}>
            <button onClick={onClick} className={styles.burger} type="button">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="#FFFDFA"/>
                    <rect y="10" width="8" height="8" fill="#FFFDFA"/>
                    <rect x="10" y="10" width="8" height="8" fill="#FFFDFA"/>
                    <rect x="10" width="8" height="8" fill="#FFFDFA"/>
                </svg>
            </button>
        </div>
    </header>
}