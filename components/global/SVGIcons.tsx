import styles from "@/styles/home/SVGIcons.module.scss"
import HomeIcon from "@/public/icons/around_home.svg"
import AboutUsIcon from "@/public/icons/about_us.svg"
import YourProjectIcon from "@/public/icons/your_project.svg"
import ProjectsIcon from "@/public/icons/home_projects.svg"
import GithubIcon from "@/public/icons/github.svg"
import LinkedinIcon from "@/public/icons/linkedin.svg"
import MaltIcon from "@/public/icons/malt.svg"
import FacebookIcon from "@/public/icons/facebook.svg"

type Props = {
  type: string
}

export default function SVGIcons({ type }: Props) {
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
    }
  }

  return <div className={styles.svgContainer}>{svgIcon(type)}</div>
}
