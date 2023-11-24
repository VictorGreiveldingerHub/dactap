import React from 'react';

export default function ContactPage() {
  return (
    <form className="container">
      <h1>Contactez-nous !</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows={6} name="message"></textarea>
      </div>
      <div className="button block">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}
