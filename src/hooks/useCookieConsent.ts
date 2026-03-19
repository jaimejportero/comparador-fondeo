import { useState } from "react";

type ConsentValue = "accepted" | "rejected" | null;

export function useCookieConsent() {
  const [consent, setConsentState] = useState<ConsentValue>(() => {
    return (localStorage.getItem("cookie_consent") as ConsentValue) ?? null;
  });

  const setConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", value);
    setConsentState(value);
  };

  return { consent, setConsent };
}