import { TeamMemberModel } from "@/models/TeamMemberModel"
import SVGIcons from "@/components/global/SVGIcons"
import Image from "next/image"
import Link from "next/link"
import { phoneMask } from "@/helpers/utils"
import EmailIcon from "@/public/icons/email.svg"
import TelIcon from "@/public/icons/tel.svg"
import WhatsAppIcon from "@/public/icons/whatsapp.svg"
import IconWithText from "../global/IconWithText"
import styles from "@/styles/about/TeamCard.module.scss"

type Props = {
  teamMember: TeamMemberModel
  translationContent: any
}

export default function TeamCard({ teamMember, translationContent }: Props) {
  return (
    <article className={styles.teamCard}>
      <h3>{teamMember.companyName}</h3>
      <div className={styles.headerContainer}>
        <figure>
          <div className={styles.imgContainer}>
            <Image
              src={`/team/${teamMember.picture}`}
              alt={teamMember.firstName + " " + teamMember.lastName}
              width={200}
              height={200}
            />
          </div>
          <figcaption>
            {teamMember.firstName + " " + teamMember.lastName}
          </figcaption>
        </figure>
        <address className={styles.contactDetails}>
          <p className={styles.subTitle}>
            {translationContent.contactSubTitle}
          </p>
          <div className={styles.emailContainer}>
            <EmailIcon />
            <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
          </div>
          <div className={styles.phoneContainer}>
            <div>
              <TelIcon />
              <WhatsAppIcon />
            </div>
            <a href={`tel:${teamMember.phone}`}>
              {phoneMask(teamMember.phone)}
            </a>
          </div>
          <p className={styles.subTitle}>
            {translationContent.socialNetworksSubTitle}
          </p>
          <ul className={styles.socialNetworksList}>
            {teamMember.socialNetworks.map((socialNetwork, index) => (
              <li key={index}>
                <Link href={socialNetwork.link} legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    <SVGIcons type={socialNetwork.name} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </address>
      </div>
      <h4>{translationContent.expertiseSubTitle}</h4>
      <p>{teamMember.description}</p>
      <ul className={styles.skillsList}>
        {teamMember.skills.map((skill, index) => (
          <li key={index}>
            <IconWithText imgSrc={skill.logo} title={skill.name} />
          </li>
        ))}
      </ul>
      <h4>{translationContent.passionsSubTitle}</h4>
      <ul className={styles.passionsList}>
        {teamMember.passions.map((passion, index) => (
          <li key={index}>
            <IconWithText imgSrc={passion.logo} title={passion.name} />
          </li>
        ))}
      </ul>
    </article>
  )
}
