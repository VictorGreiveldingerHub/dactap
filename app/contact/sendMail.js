const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: `${formData.email}`,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (formData) => {
  const mailOptions = {
    from: {
      address: `${formData.email}`,
    },
    to: process.env.USER,
    subject: formData.sujet || "Sujet par défaut", // Utilisation du sujet du formulaire ou un sujet par défaut
    text: `De: ${formData.first} + ' ' + ${formData.last}\nEmail: ${formData.email}\nMessage: ${formData.message}`, // Utilisation des données du formulaire
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé');
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendMail;
