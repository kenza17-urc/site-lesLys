import React, { useState } from 'react';

const DataAccessRequestForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:1337/api/request-data-accesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setSuccess(true);
        setMessage('Votre demande d’accès aux données personnelles a été envoyée.');
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setMessage('Erreur lors de l\'envoi de la demande.');
    }
  
    setEmail('');  // Réinitialise le champ email
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Demande d'accès aux données personnelles</h2>
      <p>Vous avez le droit de demander l'accès à vos données personnelles que nous détenons. Veuillez remplir ce formulaire pour soumettre votre demande.</p>
      {success ? (
        <p style={{ color: 'green' }}>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Adresse e-mail :</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
                marginBottom: '10px',
                padding: '10px',
                width: '100%',
                color: '#000',  // Définit le texte en noir
                backgroundColor: '#fff',  // Assure que l'arrière-plan est blanc
              }}
          /><br />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0069d9', color: '#fff', border: 'none' }}>
            Soumettre la demande
          </button>
        </form>
      )}
    </div>
  );
};

export default DataAccessRequestForm;
