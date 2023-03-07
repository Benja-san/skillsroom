import Link from "next/link"
import localFont from 'next/font/local'
import styles from '@/styles/Header.module.scss'

const bigJohnPro = localFont({src: "../public/fonts/bjp-bold.otf"})

export default function Header() {
    return <header className={styles.header}>
        <Link href="/" legacyBehavior>
            <a className={`${bigJohnPro.className} ${styles.logo}`}>Sk<span>i</span>lls R<span>o</span>om</a>
        </Link>
    </header>
}