import { PropsWithChildren } from "react"
import Header from "./header"
import Footer from "./footer"
import styles from '@/styles/Layout.module.scss'

export default function Layout({ children }: PropsWithChildren ) {
    return <>
        <Header/>
        <main className={styles.main} >
            {children}
        </main>
        <Footer/>
    </>
}
