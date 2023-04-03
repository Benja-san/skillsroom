import { PropsWithChildren, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import { Oxygen } from "next/font/google"
import styles from "@/styles/layout/Layout.module.scss"
import localFont from "next/font/local"
import ChatButton from "./chatButton"

const bigJohnPro = localFont({
  src: "../../public/fonts/bjp-bold.otf",
  variable: "--bigJohnPro-font",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
})

const oxygen = Oxygen({
  weight: "400",
  subsets: ["latin"],
  variable: "--oxygen-font",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
})

export default function Layout({ children }: PropsWithChildren) {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      <Header 
        onClick={handleActiveMenu}
        font={bigJohnPro} 
      />
      <Sidebar 
        onClick={handleActiveMenu}
        activeMenu={activeMenu} 
        font={bigJohnPro}
      />
      <main className={`${styles.main} ${oxygen.className} ${bigJohnPro.variable}`}>{children}</main>
      <ChatButton />
      <Footer 
        font={oxygen}
      />
    </>
  )
}