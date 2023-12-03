"use server"

import nodemailer from 'nodemailer';

import dotenv from 'dotenv';

dotenv.config();

interface FormData {
  senderEmail : string;
  email: string;
  subject: string;
  firstName: string;
  lastName: string;
  message: string;
}

  const transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MJ_APIKEY_PUBLIC as string,
      pass: process.env.MJ_APIKEY_PRIVATE as string,
    },
  });

const sendMail = async (formData: FormData) => {

  const senderEmail = process.env.DACTAPMAIL as string
  const email = formData.email;
  const subject = formData.subject;
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const message = formData.message;

  const mailOptions = {
    from: `${firstName} ${lastName} <${senderEmail}>`,
    to: process.env.DACTAPMAIL as string,
    subject: subject || 'Sujet par défaut',
    text: `De: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default sendMail;