import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.brevo.com/v3/emailCampaigns',
        {
          email: email,
          listIds: [3], // ID liste de contacts Sendinblue
          updateEnabled: false // Indique si le contact doit être mis à jour s'il existe déjà
        },
        {
          headers: {
            'api-key': process.env.api_key,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setMessage('Merci pour votre inscription à notre newsletter!');
        setEmail(''); // Réinitialiser l'email après soumission
      } else {
        setMessage('Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      setMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
        <input
          type='email'
          placeholder='Votre adresse email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input' 
        />
        <button type='submit' className='btn btn-accent min-w-[150px]'>
          Joindre
        </button>
      </form>
      {message && <p className='text-center text-white/70'>{message}</p>} {/* Style du message */}
    </div>
  );
};

export default NewsletterForm;
