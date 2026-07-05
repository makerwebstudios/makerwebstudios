import { useEffect } from "react";
import Home from "./Home";
import CookieBanner from "../components/CookieBanner";

// Homepage is the self-contained "Operator's Studio" redesign (its own nav + footer).
// Keep the CookieBanner (consent + RB2B/analytics) and light theme; skip the old Layout
// chrome so nothing else on the site changes.
const MainSite = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <>
      <Home />
      <CookieBanner />
    </>
  );
};

export default MainSite;
