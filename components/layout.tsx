import { PropsWithChildren, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import styles from '@/styles/Layout.module.scss'

export default function Layout({ children }: PropsWithChildren ) {

    const [activeMenu, setActiveMenu] = useState<boolean>(false)

    return <>
        <Header
            setActiveMenu={setActiveMenu}
        />
        <Sidebar
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
        />
        <main className={styles.main} >
            {children}
        </main>
        <Footer/>
    </>
}
