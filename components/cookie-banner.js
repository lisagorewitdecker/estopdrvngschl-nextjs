import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (!Cookies.get('cookieConsent')) return;

    const timeoutId = window.setTimeout(() => {
      setShowBanner(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to enhance the user experience.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieBanner;
