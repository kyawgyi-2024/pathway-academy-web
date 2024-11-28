import { lazy } from "react";
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const FAQPage = lazy(() => import("../features/public/pages/FAQPage"));
const SupportPage = lazy(() => import("../features/public/pages/SupportPage"));
const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/PrivacyPolicyPage")
);
const TermsAndConditionPage = lazy(() =>
  import("../features/public/pages/TermsAndConditionPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "faq",
    element: <FAQPage />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "termsandconditions",
    element: <TermsAndConditionPage />,
  },
];

export default publicRoute;
