import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.OAUTH_EMAIL,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
    }

  })

  let mailOptions = {
    from: req.body.email,
    to: [process.env.OAUTH_EMAIL, "beugnet.freelance@gmail.com"],
    subject: `New message from ${req.body.firstname} ${req.body.lastname}`,
    text: `
    First Name : ${req.body.firstname}
    Last Name : ${req.body.lastname}
    Email : ${req.body.email}
    Phone : ${req.body.phone}
    Country : ${req.body.country}
    Company Name : ${req.body.companyName}
    Status : ${req.body.status}
    Subject : ${req.body.subject}
    Message : ${req.body.message}
    `,
   }

  transporter.sendMail(mailOptions, function (err: any, data: any) {
    if (err) {
      return res.status(500).json({ message: err.message })
    } else {
      return res.status(200).json({ message: "Email sent!" })
    }
  })
}