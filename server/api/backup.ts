import { useQuery } from 'h3'
import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

const sendBackupEmail = async (username: string, to: string, blob?: Blob) => {
  // email auth account info
  const passport = {
    user: config.public.EMAIL_USER,
    pass: config.public.EMAIL_PASSWORD
  }

  // create email transport
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
    auth: passport,
    connectionTimeout: 300000,
    greetingTimeout: 300000
  })

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })

  const datetime = new Date()

  const attachments = [
    {
      filename: `${datetime.getFullYear()}-${datetime.getMonth()}-${datetime.getDate()}-backup.json`,
      content: blob
    }
  ]

  const mailOptions = {
    from: config.public.EMAIL_USER,
    to: to,
    cc: '',
    bcc: '',
    subject: `Hi, ${username}, your one tab group backup is ready!`,
    html: `Hello ${username} !`,
    attachments
  }

  // send mail with defined transport object
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      }
      resolve(info.messageId)
    })
  })
}

export default async (req: any) => {
  const { username, to, blob = null } = useQuery(req) as any
  const data = await sendBackupEmail(username, to, blob)
  return {
    data
  }
}
