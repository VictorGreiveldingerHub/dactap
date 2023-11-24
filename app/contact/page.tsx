'use client'

import React, { useState } from 'react';
import sendMail from './sendMail'; // Import du module sendMail

export default function Home() {
  const initialFormData = {
    email: '',
    first: '',
    last: '',
    sujet: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await sendMail(formData); // Envoi des données du formulaire à sendMail
      // Réinitialiser le formulaire après l'envoi
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      {/* ... Votre formulaire existant */}
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
            name="first"
            autoComplete="given-name"
            required
            value={formData.first}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="frm-last">Prénom</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
            value={formData.last}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="block sujet">
        <label htmlFor="frm-sujet">Sujet</label>
        <input
          id="frm-sujet"
          type="text"
          name="sujet"
          required
          value={formData.sujet}
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
