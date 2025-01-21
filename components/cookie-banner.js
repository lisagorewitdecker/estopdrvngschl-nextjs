import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (consent) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner">
        <p>This website uses cookies to enhance the user experience.</p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  );
};

export default CookieBanner;
