import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';
const Footer = () => {
  return (
    <footer className='pt-16 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
          Abonnez-vous à notre newsletter
          </h2>
          <p className='text-white/70'>
          Soyez le premier à recevoir les dernières nouvelles sur les tendances, les promotions et
            beaucoup plus!
          </p>
        </div>
        {/* form */}
        <NewsletterForm />
        {/* links */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
        <a href='/mentions-legales' className='hover:text-white transition-all'>
          Mentions légales
          </a>
          <a href='/CGV' className='hover:text-white transition-all'>
          CGV
          </a>
          <a href='/PrivacyPolicy' className='hover:text-white transition-all'>
          politique de confidentialité
          </a>
        </div>
        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <a href='#' className='hover:text-white transition-all'>
            <FaYoutube />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaInstagram />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaTwitter />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyright &copy; KENZA KACETE 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
