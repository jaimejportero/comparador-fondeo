import { useEffect, useState } from "react";

export function useCookieConsent() {
  const [consent, setConsent] = useState(() => {
    return localStorage.getItem("cookie_consent") === "true";
  });

  useEffect(() => {
    localStorage.setItem("cookie_consent", consent.toString());
  }, [consent]);

  return { consent, setConsent };
}
