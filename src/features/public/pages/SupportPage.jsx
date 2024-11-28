import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  UserCircle,
  AlertTriangle,
  ShoppingCart,
  Newspaper,
  Shield,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#98f8c6] py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">How can we help?</h1>
          <div className="max-w-xl mx-auto">
            <Input
              type="search"
              placeholder="Search for help..."
              className="bg-white h-12"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <CategoryCard
            icon={<UserCircle className="h-6 w-6" />}
            title="My account"
            description="Create and manage your pathway academy account"
          />
          <CategoryCard
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Troubleshooting"
            description="Experiencing a technical issue? Check Here"
          />
          <CategoryCard
            icon={<ShoppingCart className="h-6 w-6" />}
            title="Purchase/ Refund"
            description="Learn about purchasing courses, how to send gifts and refunds."
          />
          <CategoryCard
            icon={<Newspaper className="h-6 w-6" />}
            title="Enrollment"
            description="Find courses to take and learn about enrollment options."
          />
          <CategoryCard
            icon={<Shield className="h-6 w-6" />}
            title="Trust & Safety"
            description="trust & safety information and reporting."
          />
          <CategoryCard
            icon={<Rocket className="h-6 w-6" />}
            title="Getting Start"
            description="Learn how our education works and how to start learning."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Frequently Ask Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What types of courses do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer a wide range of courses including business strategy,
                development, web design, digital marketing, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I access courses on my mobile device?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all our courses are fully accessible on mobile devices
                through our mobile app or web browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                You can reset your password by clicking on the "Forgot Password"
                link on the login page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Are there any discounts or promotions for courses?
              </AccordionTrigger>
              <AccordionContent>
                We regularly offer promotions and discounts. Sign up for our
                newsletter to stay updated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can I contact my instructor if I have questions?
              </AccordionTrigger>
              <AccordionContent>
                You can contact your instructor through the course discussion
                board or direct messaging system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I get a refund if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee if you're not
                satisfied with your course.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

function CategoryCard({ icon, title, description }) {
  return (
    <div className="bg-[#f0fdf4] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#98f8c6] mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default SupportPage;
