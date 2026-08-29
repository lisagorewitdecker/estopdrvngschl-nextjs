import { useState } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(
    () => (typeof window === "undefined" ? true : !Cookies.get('cookieConsent')),
  );

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
