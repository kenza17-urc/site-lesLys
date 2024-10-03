import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Politique de confidentialité</h1>
      <p>
        Cette politique de confidentialité décrit la manière dont nous collectons, utilisons, et protégeons vos
        données personnelles lorsque vous utilisez notre site web et nos services.
      </p>

      <h2>1. Collecte des informations personnelles</h2>
      <p>
        Nous collectons les informations personnelles suivantes lorsque vous interagissez avec notre site ou nos
        services :
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Adresse IP</li>
        <li>Informations de navigation (via les cookies)</li>
      </ul>

      <h2>2. Utilisation des données collectées</h2>
      <p>
        Les données collectées sont utilisées pour :
      </p>
      <ul>
        <li>Fournir et améliorer nos services</li>
        <li>Gérer votre compte utilisateur</li>
        <li>Analyser l'utilisation de notre site via Google Analytics</li>
        <li>Personnaliser votre expérience utilisateur</li>
        <li>Envoyer des communications marketing (si vous y avez consenti)</li>
      </ul>

      <h2>3. Partage des données</h2>
      <p>
        Nous ne partageons pas vos données personnelles avec des tiers, à l'exception des cas suivants :
      </p>
      <ul>
        <li>Fournisseurs de services tiers (Google Analytics, hébergement, etc.)</li>
        <li>Autorités légales si cela est requis par la loi</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Notre site utilise des cookies pour collecter des informations de navigation et améliorer votre expérience. Vous
        avez la possibilité de désactiver les cookies non essentiels via notre bannière de cookies lors de votre
        première visite.
      </p>

      <h2>5. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul>
        <li >Accès à vos données</li>
        <a href="/DataAccessRequestForm" className="text-blue-500">Demande d'accès aux données personnelles</a>

        <li>Rectification des informations incorrectes</li>
        <li>Demande de suppression de vos données</li>
        <li>Opposition au traitement de vos données à des fins marketing</li>
      </ul>
      <p>
        Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <strong>dpo@example.com</strong>.
      </p>

      <h2>6. Sécurité des données</h2>
      <p>
        Nous prenons les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles
        contre toute perte, accès non autorisé, ou divulgation.
      </p>

      <h2>7. Modification de la politique de confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification
        sera publiée sur cette page et, si nécessaire, vous en serez informé(e) par e-mail.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à
        <strong> dpo@example.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
