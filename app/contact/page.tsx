'use client'

import React, { useState } from 'react';
import sendMail from './sendMail';

export default function Home() {
  const initialFormData = {
    senderEmail: '',
    email: '',
    subject: '',
    firstName: '',
    lastName: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await sendMail(formData);

      if (response) {
        // Réinitialiser le formulaire après l'envoi
        setFormData(initialFormData);
        console.log('E-mail envoyé avec succès depuis la page.');
      } else {
        console.error('Erreur lors de l\'envoi de l\'e-mail depuis la page.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail depuis la page:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor="frm-email">Votre email</label>
      <input
        id="frm-email"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <div className="name block">
        <div>
          <label htmlFor="frm-first">Nom</label>
          <input
            id="frm-first"
            type="text"
            name="firstName"
            autoComplete="given-name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="frm-last">Prénom</label>
          <input
            id="frm-last"
            type="text"
            name="lastName"
            autoComplete="family-name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="block sujet">
        <label htmlFor="frm-sujet">Sujet</label>
        <input
          id="frm-sujet"
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows={6} name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <div className="button block">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}