import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero */}
      <div className="bg-emerald-200">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">Privacy & Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground">
            Effective Date: [November 1, 2024]
          </p>
          <p className="mt-4">
            Welcome to Pathway Academy! Your privacy is critically important to
            us. This Privacy Policy explains how we collect, use, share, and
            safeguard your personal information when you visit our website or
            use our services. By accessing or using our platform, you agree to
            the practices outlined in this policy.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information (name, email, phone, billing
              details, account info) and non-personal data (browser type, IP
              address, device info, usage data). We do not intentionally collect
              sensitive data like health or financial information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              2. How We Collect Your Information
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li>
                Directly from You: When you register, complete a profile, enroll
                in courses, or contact us.
              </li>
              <li>
                Automatically: Through cookies, analytics, and tracking
                technologies as you interact with our website.
              </li>
              <li>
                From Third Parties: Such as payment processors, social media
                platforms, or affiliate partners.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li>
                Account Management: To register you, manage your profile, and
                provide course access.
              </li>
              <li>
                Service Delivery: To deliver content, track progress, and issue
                certificates.
              </li>
              <li>
                Payments: To securely process transactions and handle refunds.
              </li>
              <li>
                Communication: To send course updates, newsletters, and
                promotional offers.
              </li>
              <li>
                Platform Improvement: To analyze usage and improve our services.
              </li>
              <li>
                Legal Compliance: To comply with legal requirements, resolve
                disputes, and enforce terms.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell your personal data. However, we may share it with:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>
                Service Providers: For payment processing, communication, and
                analytics.
              </li>
              <li>Legal Compliance: To comply with laws or legal processes.</li>
              <li>
                Business Transfers: If Pathway Academy merges or transfers its
                business, your data may be shared with the new owner.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              5. Cookies and Tracking Technologies
            </h2>
            <p>We use cookies to enhance your experience, including:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Essential Cookies: Necessary for functionality.</li>
              <li>Performance Cookies: For tracking website usage.</li>
              <li>Advertising Cookies: To display relevant ads.</li>
            </ul>
            <p>
              You can manage cookies through your browser settings, though
              disabling them may affect website performance.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">6. Data Retention</h2>
            <p>We keep your personal data only as long as necessary for:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Account maintenance</li>
              <li>Legal compliance</li>
              <li>Resolving disputes</li>
            </ul>
            <p>
              If you delete your account, we will anonymize or securely delete
              your data, except where legally required to retain it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">7. Security Measures</h2>
            <p>
              We use reasonable security measures, including encryption for
              payments and regular security audits, to protect your data.
              However, no electronic transmission is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">8. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Access: Request a copy of your data.</li>
              <li>Correction: Update inaccurate or incomplete data.</li>
              <li>Deletion: Request deletion of your data.</li>
              <li>
                Objection: Object to data processing for specific purposes.
              </li>
              <li>Portability: Request data in a readable format.</li>
              <li>
                Withdraw Consent: Opt out of marketing communications or data
                use.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at support@pathway@gmail.com.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">9. Children's Privacy</h2>
            <p>
              Pathway Academy is for users aged 13 and older. We do not
              knowingly collect information from children under 13. If we
              discover we have unintentionally collected such data, we will
              delete it immediately.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices and encourage you to
              review their policies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page, and we encourage you to review it regularly
              to stay informed.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">12. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Email: [support@pathway@gmail.com]</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                Mailing Address: 123 Pathway Lane, Springfield, IL 62701, USA
              </li>
            </ul>
          </section>
        </div>
      </main>

     
    </div>
  );
};

export default PrivacyPolicyPage;
