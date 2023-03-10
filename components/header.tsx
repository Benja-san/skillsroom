import Link from "next/link"
import localFont from 'next/font/local'
import styles from '@/styles/Header.module.scss'

const bigJohnPro = localFont({
    src: "../public/fonts/bjp-bold.otf", 
    variable: '--bigJohnPro-font',
    display: 'swap',
    fallback: ['system-ui', 'arial', 'sans-serif']
})

export default function Header({setActiveMenu} : any) {

    function toggleMenu() {
        setActiveMenu(true)
    }

    return <header className={styles.header}>
        <Link href="/" legacyBehavior>
            <a className={`${bigJohnPro.variable} ${styles.logo}`}>Sk<span>i</span>lls R<span>o</span>om</a>
        </Link>
        <div className={styles.menu}>
            <button onClick={toggleMenu} className={styles.burger} type="button">
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