import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import InputField from "@/components/global/InputField"
import { InputFieldModel } from "@/models/InputFieldModel"
import { useForm, FieldError } from "react-hook-form"

type FormInputs = {
  firstname: string
  lastname: string
  email: string
  phone: number
  country: string
  companyName: string
  status: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { t } = useTranslation(["contact-page", "common"])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit = (data: any) => {
    console.log(data)
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
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {Object.values(t("inputs", { returnObjects: true })).map(
          (input: InputFieldModel) => {
            return (
              <InputField
                key={input.name}
                inputField={input}
                register={register}
                error={
                  errors[input.name as keyof typeof errors] as FieldError
                } 
                errorMessages={t("inputErrors", {
                  returnObjects: true,
                  ns: "common",
                  minLength: input.minLength,
                  maxLength: input.maxLength
                })}
              />
            )
          }
        )}
        <input type="submit" />
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
