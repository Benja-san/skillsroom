import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import InputField from "@/components/global/InputField"
import ActionLink from "@/components/global/ActionLink"
import FeedbackBox from "@/components/global/FeedbackBox"
import ContactInformations from "@/components/contact/ContactInformations"
import LittleArrow from "@/public/icons/arrow.svg"
import { InputFieldModel } from "@/models/InputFieldModel"
import { ContactFormDataModel } from "@/models/ContactFormDataModel"
import { useForm, FieldError } from "react-hook-form"
import { textWithLetterColored } from "@/helpers/utils"
import { useState } from "react"
import styles from "@/styles/contact/Contact.module.scss"
import { FunctionComponent } from "react"

const ContactPage: FunctionComponent = () => {
  const { t } = useTranslation(["contact-page", "common"])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDataModel>()
  const [emailSendingStatus, setEmailSendingStatus] = useState<
    "success" | "error" | "loading" | "loaded" | null
  >(null)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: ContactFormDataModel) => {
    setSubmitted(true)
    fetch("/api/contact-form", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      setEmailSendingStatus("loaded")
      if (res.status === 200) {
        reset()
        setEmailSendingStatus("success")
      } else {
        setEmailSendingStatus("error")
      }
    })
  }

  const FeedbackBoxTitle = () => {
    if (emailSendingStatus === "success") {
      return t("sendingSuccessMessage")
    } else if (emailSendingStatus === "error") {
      return t("sendingErrorMessage")
    } else {
      return t("sendingLoadingMessage")
    }
  }

  return (
    <>
      <Head>
        <title>Skills Room : {t("headTitle")}</title>
        <meta name="description" content={`${t("headDescription")}`} />
      </Head>
      <h1>{textWithLetterColored(t("title"))}</h1>
      <div className={styles.contactPage}>
        <section className={styles.contactFormSection}>
          <h2>{t("section-1.title")}</h2>
          <p>{t("section-1.introduction")}</p>
          {!submitted && (
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
                          errors[
                            input.name as keyof typeof errors
                          ] as FieldError
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
                <div className={styles.svgContainer}>
                  <LittleArrow />
                </div>
              </button>
            </form>
          )}
          {submitted && (
            <FeedbackBox type={emailSendingStatus} title={FeedbackBoxTitle()} />
          )}
        </section>
        <section className={styles.contactInformations}>
          <ContactInformations />
        </section>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contact-page",
        "common",
        "navigation",
      ])),
    },
  }
}

export default ContactPage
