// Analytics.js
import ReactGA from "react-ga4";

const TRACKING_ID = "G-9QK9JXDJJ7"; // Replace with your ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};