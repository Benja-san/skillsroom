import { TeamMemberModel } from "@/models/TeamMemberModel"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { phoneMask } from "@/helpers/utils"
import EmailIcon from "@/public/icons/email.svg"
import TelIcon from "@/public/icons/tel.svg"
import WhatsAppIcon from "@/public/icons/whatsapp.svg"
import IconWithText from "../global/IconWithText"

type Props = {
  teamMember: TeamMemberModel
  translationContent: any
}

export default function TeamCard({ teamMember, translationContent }: Props) {
  const { t } = useTranslation("about")
  console.log(translationContent)
  return (
    <article>
      <h3>{teamMember.companyName}</h3>
      <div>
        <figure>
          <Image
            src={`/team/${teamMember.picture}`}
            alt={teamMember.firstName + " " + teamMember.lastName}
            width={200}
            height={200}
          />
          <figcaption>
            {teamMember.firstName + " " + teamMember.lastName}
          </figcaption>
        </figure>
        <div>
          <p>{translationContent.contactSubTitle}</p>
          <div>
            <EmailIcon />
            <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
          </div>
          <div>
            <TelIcon />
            <WhatsAppIcon />
            <a href={`tel:${teamMember.phone}`}>
              {phoneMask(teamMember.phone)}
            </a>
          </div>
          <p>{translationContent.socialNetworksSubTitle}</p>
        </div>
      </div>
      <h4>{translationContent.expertiseSubTitle}</h4>
      <p>{teamMember.description}</p>
      <ul>
        {teamMember.skills.map((skill, index) => (
          <li key={index}>
            <IconWithText imgSrc={skill.logo} title={skill.name} />
          </li>
        ))}
      </ul>
    </article>
  )
}
