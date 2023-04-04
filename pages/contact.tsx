import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import InputField from "@/components/global/InputField"
import ActionLink from "@/components/global/ActionLink"
import { InputFieldModel } from "@/models/InputFieldModel"
import { ContactFormDataModel } from "@/models/ContactFormDataModel"
import { useForm, FieldError } from "react-hook-form"
import { useState } from "react"
import styles from "@/styles/contact/Contact.module.scss"

export default function ContactPage() {
  const { t } = useTranslation(["contact-page", "common"])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormDataModel>()
  const [errorEmailSending, setErrorEmailSending] = useState(false)
  const [successEmailSending, setSuccessEmailSending] = useState(false)

  const onSubmit = (data: ContactFormDataModel) => {
    console.log(data)
    fetch("/api/contact-form", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        reset()
        setSuccessEmailSending(true)
      } else {
        setErrorEmailSending(true)
      }
    })
  }

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.contactForm}
      >
        {Object.values(t("inputs", { returnObjects: true })).map(
          (input: InputFieldModel) => {
            return (
              <div className={styles.inputContainer} key={input.name}>
                <InputField
                  inputField={input}
                  register={register}
                  error={
                    errors[input.name as keyof typeof errors] as FieldError
                  }
                  errorMessages={t("inputErrors", {
                    returnObjects: true,
                    ns: "common",
                    minLength: input.minLength,
                    maxLength: input.maxLength,
                  })}
                />
              </div>
            )
          }
        )}
        <button type="submit" className={styles.submitInput}>
          <ActionLink title={t("contactButton")} />
        </button>
      </form>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact-page", "common"])),
    },
  }
}
