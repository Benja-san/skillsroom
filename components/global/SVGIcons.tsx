import styles from "@/styles/global/SVGIcons.module.scss"
import HomeIcon from "@/public/icons/around_home.svg"
import AboutUsIcon from "@/public/icons/about_us.svg"
import YourProjectIcon from "@/public/icons/your_project.svg"
import ProjectsIcon from "@/public/icons/home_projects.svg"
import GithubIcon from "@/public/icons/github.svg"
import LinkedinIcon from "@/public/icons/linkedin.svg"
import MaltIcon from "@/public/icons/malt.svg"
import FacebookIcon from "@/public/icons/facebook.svg"
import HomeNav from "@/public/icons/home-nav.svg"
import AboutUsNav from "@/public/icons/about-us-nav.svg"
import ContactNav from "@/public/icons/contact-nav.svg"
import PortfolioNav from "@/public/icons/portfolio-nav.svg"
import ServicesNav from "@/public/icons/services-nav.svg"
import { FunctionComponent } from "react"

type Props = {
  type: string
}

const SVGIcons: FunctionComponent<Props> = ({ type }) => {
  const svgIcon = (svgType: string) => {
    switch (svgType) {
      case "home":
        return <HomeIcon />
      case "about-us":
        return <AboutUsIcon />
      case "your-project":
        return <YourProjectIcon />
      case "projects":
        return <ProjectsIcon />
      case "github":
        return <GithubIcon />
      case "linkedin":
        return <LinkedinIcon />
      case "malt":
        return <MaltIcon />
      case "facebook":
        return <FacebookIcon />
      case "home-nav":
        return <HomeNav />
      case "services-nav":
        return <ServicesNav />
      case "contact-nav":
        return <ContactNav />
      case "about-us-nav":
        return <AboutUsNav />
      case "portfolio-nav":
        return <PortfolioNav />
    }
  }

  return <div className={styles.svgContainer}>{svgIcon(type)}</div>
}

export default SVGIcons