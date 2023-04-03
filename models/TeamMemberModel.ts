export interface TeamMemberModel {
  companyName: string
  firstName: string
  lastName: string
  email: string
  phone: number
  socialNetworks: Array<SocialNetworkModel>
  picture: string
  description: string
  skills: Array<SkillModel>
  passions: Array<PassionModel>
}

export interface SkillModel {
  name: string
  logo: string
}

export interface SocialNetworkModel {
  name: string
  link: string
}

export interface PassionModel {
  name: string
  logo: string
}