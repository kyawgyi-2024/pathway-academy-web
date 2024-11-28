import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsAndConditionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-emerald-200">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">Terms & Condition</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              By using Pathway Academy’s services, including enrolling in
              courses, you agree to these Terms and Conditions. We reserve the
              right to modify these terms at any time. For questions, contact us
              to pathway67@gmail.com
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">2. Eligibility</h2>
            <p>
              You must be at least 16 years old to enroll. If under 18, you need
              parental consent. You are responsible for ensuring your
              information is accurate and up-to-date
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">3. Services Provided</h2>
            <p>
              Pathway Academy offers online courses, workshops, and educational
              programs. Course materials are provided for personal use and
              access is limited to the duration of your enrollment.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">4. Account Creation</h2>
            <p>
              To enroll, you must create an account. You are responsible for
              keeping your login information secure. Do not share your account
              or misuse the platform.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              5. Course Enrollment and Fees
            </h2>
            <p>
              Enrollment requires payment. We accept [KPZ Pay, AYA Pay, Wave
              Pay]. A refund is available within 7 days of enrollment if you
              haven't accessed the course. After 7 days, no refund is provided
              unless under exceptional circumstances.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
            <p>
              All content (videos, materials, etc.) is owned by Pathway Academy.
              You are granted a non-transferable, non-commercial license to
              access and use course materials.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">7. Code of Conduct</h2>
            <p>
              Respectful behavior is expected in all interactions. We reserve
              the right to suspend or terminate your access for misconduct. No
              refunds are given if your access is terminated for violations.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              8. Privacy and Data Collection
            </h2>
            <p>
              We collect personal information to process your enrollment,
              payments, and improve services. Your data will be protected but
              shared with trusted third parties for payment processing or
              communication purposes.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">
              9. Limitation of Liability
            </h2>
            <p>
              Pathway Academy is not liable for any damages or losses related to
              course access or use. Our liability is limited to the amount you
              paid for the course.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">10. Termination</h2>
            <p>
              You can terminate your account by contacting us. We may suspend or
              terminate your access for failure to comply with these Terms. Fees
              will not be refunded if your access is terminated due to
              violations.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">11. Amendments</h2>
            <p>
              We may update these Terms at any time. Continued use of our
              services after changes means you accept the updated Terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">12. Contact Information</h2>
            <p>For support or inquiries, contact us at:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Email: [support@pathway@gmail.com]</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </main>

      
    </div>
  );
};

export default TermsAndConditionPage;
