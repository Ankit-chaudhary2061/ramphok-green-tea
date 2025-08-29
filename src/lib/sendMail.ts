// lib/sendMail.ts
import nodemailer from 'nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const sendMail = async (mailInfo: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_GMAIL,
      pass: process.env.NODEMAILER_GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `Contact Form <${process.env.NODEMAILER_GMAIL}>`,
    to: mailInfo.to,
    subject: mailInfo.subject,
    text: mailInfo.text,
    html: mailInfo.html,
  });
};

export default sendMail;
