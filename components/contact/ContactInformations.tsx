import { useTranslation } from "next-i18next"
import EmailIcon from "@/public/icons/email.svg"
import TelIcon from "@/public/icons/tel.svg"
import WhatsAppIcon from "@/public/icons/whatsapp.svg"
import MapGoogle from "./MapGoogle"
import { FunctionComponent } from "react"
import styles from "@/styles/contact/ContactInformations.module.scss"

const ContactInformations: FunctionComponent = () => {
  const { t } = useTranslation(["contact-page", "common"])

  return (
    <>
      <h2>{t("section-2.title")}</h2>
      <p>{t("section-2.introduction")}</p>

      <div className={`${styles.reachUsContainer} ${styles.subSection}`}>
        <h3>
          <span>{t("section-2.reachUsTitle")}</span>
        </h3>
        <p>{t("section-2.reachUsContent")}</p>
        <address>
          <div className={styles.inlineIconText}>
            <EmailIcon />
            <a href="mailto:contact@skillsroom.com">contact@skillsroom.com</a>
          </div>
          <div className={styles.inlineIconText}>
            <div>
              <WhatsAppIcon />
              <TelIcon />
            </div>
            <a href="tel:+33603362846">+33 603 362 846</a>
          </div>
        </address>
      </div>

      <div className={`${styles.subSection} ${styles.openingHoursSection}`}>
        <h3>{t("section-2.openingHoursTitle")}</h3>
        <p>{t("section-2.openingHoursContent")}</p>
        <div className={styles.openingHoursContainer}>
          <p>{t("section-2.openingHoursMtoFTitle")}</p>
          <p>{t("section-2.openingHoursMtoF")}</p>
        </div>
        <div className={styles.openingHoursContainer}>
          <p>{t("section-2.openingHoursSaturdayTitle")}</p>
          <p>{t("section-2.openingHoursSaturday")}</p>
        </div>
      </div>

      <div className={`${styles.subSection}`}>
        <h3>{t("section-2.geographicalTitle")}</h3>
        <p>{t("section-2.geographicalContent")}</p>
        <MapGoogle />
      </div>
    </>
  )
}

export default ContactInformations
