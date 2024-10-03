import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'true') {
      addGoogleAnalytics();  // Activer Google Analytics si l'utilisateur a déjà accepté
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsentGiven(true);
    setShowBanner(false);
    addGoogleAnalytics();  // Activer Google Analytics après acceptation
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  const addGoogleAnalytics = () => {
    // Ajouter dynamiquement le script Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-HXYYB8F9VH`; 
    document.head.appendChild(script);

    // Initialiser Google Analytics après que le script est chargé
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-HXYYB8F9VH'); 
    };
  };

  return (
    showBanner && (
      <div style={styles.banner}>
        <p>Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous ces cookies supplémentaires ?</p>
        <button onClick={handleAccept} style={styles.button}>Accepter</button>
        <button onClick={handleDecline} style={styles.button}>Refuser</button>
      </div>
    )
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  button: {
    marginLeft: '10px',
    padding: '10px 15px',
    backgroundColor: '#0069d9',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CookieBanner;
