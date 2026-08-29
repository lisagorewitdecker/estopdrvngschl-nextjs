import { useSyncExternalStore } from "react";
import Cookies from "js-cookie";

const COOKIE_CONSENT_EVENT = "cookie-consent-change";

const subscribe = (callback) => {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(COOKIE_CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
  };
};

const CookieBanner = () => {
  const hasConsent = useSyncExternalStore(
    subscribe,
    () => Boolean(Cookies.get('cookieConsent')),
    () => false
  );

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    }
  };

  return (
    !hasConsent && (
      <div className="cookie-banner">
        <p>This website uses cookies to enhance the user experience.</p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  );
};

export default CookieBanner;
