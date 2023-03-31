import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import InputField from "@/components/global/InputField"
import { InputFieldModel } from "@/models/InputFieldModel"

export default function ContactPage() {
  const { t } = useTranslation("contact-page")

  return (
    <>
      <Head>
        <title>Skills Room : {t("headTitle")}</title>
        <meta name="description" content={`${t("headDescription")}`} />
      </Head>
      {/* TODO: When PR of about page is merged, 
      add the function to color the letter at the end of the h1 title */}
      <h1>{t("title")}</h1>
      <p>{t("introduction")}</p>
      <ul>
        {Object.values(t("inputs", { returnObjects: true })).map(
          (input, index) => {
            return (
              <li>
                <InputField
                  key={input.name}
                  name={input.name}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  isRequired={input.isRequired}
                  options={input.options}
                />
              </li>
            )
          }
        )}
      </ul>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact-page"])),
    },
  }
}
