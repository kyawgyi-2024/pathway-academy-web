import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
// import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Link } from "react-router-dom";
import askPhoto from "../../../assets/faq/ask.png";
import faqheroSection from "../../../assets/faq/heroSection.png";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuX,
  LuYoutube,
} from "react-icons/lu";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section src={faqheroSection} className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">FAQs</h1>
        </div>
      </section> */}
      <section className="relative h-[400px]">
        <img
          src={faqheroSection}
          alt="FAQ Hero Section"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">FAQs</h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Frequently Ask Questions
          </h2>

          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="pricing">Pricing & Plan</TabsTrigger>
            </TabsList>

            {/* general faq */}
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* courses faq */}

            <TabsContent value="courses">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* subscription faq */}
            <TabsContent value="subscription">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* pricing & plan faq */}

            <TabsContent value="pricing">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Additional tab contents would follow the same pattern */}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-auto">
              <img
                src={askPhoto}
                alt="Contact support"
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Ask us anything</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="Type a question" rows={6} />
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600"
                >
                  Submit
                </Button>
              </form>
              <div className="mt-8 flex gap-3 items-center ">
                <p className="font-semibold  text-gray-600 items-center">
                  Follow us on
                </p>
                <div className="flex space-x-3 items-center">
                  <Link href="#" className="text-white hover:text-gray-900">
                    <LuFacebook className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-900 ">
                    <LuInstagram className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-900">
                    <LuX className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-900">
                    <LuLinkedin className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-900">
                    <LuYoutube className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
