import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Oxygen } from 'next/font/google'
import localFont from 'next/font/local'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import glucosePic from '@/public/projects-links-landing-page/benjamin_beugnet_web_services_x_margot_ballois_x_glucose_toujours.png'
import poleNordDesignPic from '@/public/projects-links-landing-page/benjamin_beugnet_web_services_x_margot_ballois_x_pole_nord_design.png'
import fincomePic from '@/public/projects-links-landing-page/benjamin_beugnet_web_services_x_margot_ballois_x_fincome.png'
import wildCodeSchoolPic from '@/public/projects-links-landing-page/benjamin_beugnet_web_services_x_wild_code_school.png'
import bbwsPic from '@/public/team/benjamin_beugnet_web_services.jpg'
import mBalloisPic from '@/public/team/margot_ballois.jpeg'

const oxygen = Oxygen({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--oxygen-font',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif']
})
const bigJohnPro = localFont({
  src: "../public/fonts/bjp-bold.otf",
  variable: '--bigJohnPro-font',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif']
})

export default function Home() {

  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Skills Room : {t('head-title-home')}</title>
        <meta name="description" content={`${t('head-description-home')}`} />
      </Head>
      <section className={styles.section}>
        <h1 className={bigJohnPro.className} >Coming So<span>o</span>n</h1>
        <p className={oxygen.className}>{t('landing-h1-subp')}</p>
      </section>
      <section className={styles.section}>
        <h2 className={bigJohnPro.className} >{t('landing-contact-title')}</h2>
        <p className={oxygen.className}>{t('landing-contact-subp')}</p>
        <ul className={`${oxygen.className} ${styles.contact}`}>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
            <a href={`mailto:beugnet.freelance@gmail.com, margot.ballois@gmail.com?subject=${t('landing-contact-subject')}`}>beugnet.freelance@gmail.com</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13 9h2v-7c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-7h-2v4h-10v-14.024h10v4.024zm-5 13c.553 0 1-.448 1-1s-.447-1-1-1c-.552 0-.999.448-.999 1s.447 1 .999 1zm10-11v-3l5 4-5 4v-3h-9v-2h9zm-11.5-9h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z"/></svg>
            <a href="tel:+33603362846">+33 603 362 846</a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={bigJohnPro.className} >{t('landing-projects-title')}</h2>
        <ul className={styles.projects}>
          <li>
            <a href="https://glucosetoujours.com/" target="_blank" >
              <Image
                src={glucosePic}
                alt={t('landing-project-1-alt')}
                fill
                object-fit="contain"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://polenorddesign.com/" target="_blank" >
              <Image
                src={poleNordDesignPic}
                alt={t('landing-project-2-alt')}
                fill
                object-fit="contain"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://www.fincome.co/" target="_blank" >
              <Image
                src={fincomePic}
                alt={t('landing-project-3-alt')}
                fill
                object-fit="contain"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://www.wildcodeschool.com/" target="_blank" >
              <Image
                src={wildCodeSchoolPic}
                alt={t('landing-project-4-alt')}
                fill
                object-fit="contain"
                priority
              />
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={bigJohnPro.className} >{t('landing-team-title')}</h2>
        <ul className={styles.team}>
          <li>
            <Image
              src={bbwsPic}
              alt={t('landing-member-1-alt')}
              width={250}
            />
            <h3 className={bigJohnPro.className}>Benjamin Beugnet Web services</h3>
            <ul className={styles.network}>
              <li>
                <a href="https://github.com/benja-san" target="_blank" >
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                  <g><path d="M500,10C236.3,10,22.6,229.4,22.6,500c0,270.6,213.8,490,477.4,490c263.7,0,477.4-219.4,477.4-490C977.4,229.4,763.7,10,500,10z M643.3,940.1c-23,4.6-31.1-9.9-31.1-22.3c0-15.2,0.5-65.2,0.5-127.2c0-43.3-14.5-71.6-30.7-86c100.8-11.4,206.5-50.7,206.5-228.8c0-50.6-17.5-92.1-46.5-124.5c4.6-11.7,20.2-58.8-4.5-122.7c0,0-37.9-12.5-124.3,47.6c-36.1-10.3-74.8-15.5-113.2-15.7c-38.5,0.2-77.2,5.3-113.2,15.7c-86.4-60-124.4-47.6-124.4-47.6c-24.6,63.9-9.1,111-4.4,122.7c-28.9,32.4-46.5,73.8-46.5,124.5c0,177.7,105.6,217.5,206,229.2c-12.9,11.6-24.6,32-28.7,62c-25.8,11.8-91.3,32.3-131.6-38.6c0,0-23.9-44.5-69.3-47.8c0,0-44.2-0.6-3.1,28.2c0,0,29.7,14.2,50.2,67.8c0,0,26.6,90.2,152.4,62.2c0.2,38.7,0.6,67.9,0.6,78.9c0,12.3-8.2,26.6-30.9,22.3c-179.8-61.3-309.3-235.1-309.3-440C47.7,244,250.2,36.4,500,36.4c249.8,0,452.3,207.6,452.3,463.8C952.3,705,822.8,878.7,643.3,940.1z"/></g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/benjamin-beugnet-web-services/" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/benjaminbeugnetws" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Image
              src={mBalloisPic}
              alt={t('landing-member-2-alt')}
              width={250}
            />
            <h3 className={bigJohnPro.className}>Margot Ballois</h3>
            <ul className={styles.network}>
              <li>
                <a href="https://www.linkedin.com/in/margot-ballois/" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps({ locale } : any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
    },
  }
}