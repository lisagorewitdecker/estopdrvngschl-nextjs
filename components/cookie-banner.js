import { useState, useSyncExternalStore } from "react";
import Cookies from "js-cookie";

const subscribe = () => () => {};
const getConsentSnapshot = () => Cookies.get('cookieConsent') === 'true';

const CookieBanner = () => {
  const hasConsent = useSyncExternalStore(subscribe, getConsentSnapshot, () => false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setIsDismissed(true);
  };

  if (hasConsent || isDismissed) return null;

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to enhance the user experience.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieBanner;
