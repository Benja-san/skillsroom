import { PropsWithChildren, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import { Oxygen } from "next/font/google"
import styles from "@/styles/Layout.module.scss"
import localFont from "next/font/local"

const bigJohnPro = localFont({
  src: "../public/fonts/bjp-bold.otf",
  variable: "--bigJohnPro-font",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
})

const oxygen = Oxygen({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--oxygen-font",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
})

export default function Layout({ children }: PropsWithChildren) {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <>
      <Header setActiveMenu={setActiveMenu} />
      <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <main className={`${styles.main} ${oxygen.className} ${bigJohnPro.variable}`}>{children}</main>
      <Footer />
    </>
  )
}
