import Link from "next/link"
import localFont from 'next/font/local'
import styles from '@/styles/Header.module.scss'

const bigJohnPro = localFont({
    src: "../public/fonts/bjp-bold.otf", 
    variable: '--bigJohnPro-font',
    display: 'swap',
    fallback: ['system-ui', 'arial', 'sans-serif']
})

export default function Header() {
    return <header className={styles.header}>
        <Link href="/" legacyBehavior>
            <a className={`${bigJohnPro.variable} ${styles.logo}`}>Sk<span>i</span>lls R<span>o</span>om</a>
        </Link>
    </header>
}