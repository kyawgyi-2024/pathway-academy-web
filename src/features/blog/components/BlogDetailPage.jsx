import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const BlogDetailPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Pathway Academy Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
          <Link to={"/signin"}>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </Link>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="bg-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">July 28, 2024</p>
            <h1 className="text-3xl font-bold leading-tight">
              Announcing 10 entry-level Professional Certificates from our
              biggest partners as digital transformation reshapes the labor
              market
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-gray max-w-none">
              <div className="mb-8">
                <p className="text-lg font-medium">
                  By Marni Baker, Chief Content Officer, Pathway Academy
                </p>
              </div>

              <p className="text-gray-600 mb-8">
                We're excited to announce the expansion of our entry-level
                Professional Certificate portfolio with 10 new programs from
                industry partners. Pathway Academy now offers 50+ entry-level
                certificates across various job roles, with nearly half launched
                in 2024. These programs are designed to assist learners for
                in-demand, entry-level jobs as technology reshapes the labor
                market.
              </p>

              <div className="my-12">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Team meeting"
                  width={800}
                  height={400}
                  className="rounded-lg"
                /> */}
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                New Opportunities for Career Growth
              </h2>
              <p className="mb-8">
                In collaboration with our largest industry partners, Pathway
                Academy is excited to offer 10 entry-level Professional
                Certificates. As digital transformation reshapes the labor
                market, these certificates are designed to equip you with
                essential skills that are in high demand.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Focus on In-Demand Skills
              </h2>
              <p className="mb-8">
                Our courses cover critical areas such as Data Analytics,
                Cybersecurity, Cloud Computing, Digital Marketing, and
                more—helping you build a strong foundation for a career in the
                ever-evolving digital workforce.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Industry-Recognized Credentials
              </h2>
              <p className="mb-8">
                Earn certifications backed by some of the biggest names in the
                tech and business sectors. These credentials are recognized by
                employers around the world, ensuring you have the skills they're
                looking for.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                For Beginners and Career Changers
              </h2>
              <p className="mb-8">
                Whether you're just starting your career or transitioning into a
                new field, these entry-level programs are designed to help you
                gain hands-on experience and valuable expertise, preparing you
                for high-demand roles across industries.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Start Your Journey Today
              </h2>
              <p className="mb-8">
                Take control of your future with professional certificates that
                open doors to exciting career opportunities in a digital-first
                world.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Keep Reading</h2>
              <div className="space-y-6">
                {[
                  {
                    title:
                      "Introducing Pathway Academy's 2024 Outstanding Enterprise Customer Achievement Award Winners",
                    link: "#",
                  },
                  {
                    title:
                      "AI Grading: Faster, Quality Feedback on Pathway Academy",
                    link: "#",
                  },
                ].map((article, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <Link
                        href={article.link}
                        className="text-base font-medium hover:text-emerald-500 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-[#404040] text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            Logo and Description ///
            <div className="lg:col-span-2">
              <Link to={"/"} className="flex items-center gap-2 mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Pathway Academy"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </Link>
              <p className="text-gray-400 max-w-md">
                Pathway Academy provides the tools and guidance to turn your
                goals into achievements
              </p>
            </div>

            Our Service  ///
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Our Service
              </h3>
              <ul className="space-y-2">
                {[
                  "Business Strategy",
                  "Development",
                  "Web Design",
                  "Digital Marketing",
                  "Content Writing",
                  "Language",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            Quick Links ///
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick links
              </h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact us",
                  "Blog",
                  "Sign up student",
                  "Sign up instructor",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            Community and Apps ///
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Community
              </h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Supports",
                  "Faqs",
                  "Privacy policy",
                  "Terms & condition",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-white font-semibold text-lg mb-4">
                App available on
              </h3>
              <div className="flex gap-4 mb-8">
                <Link href="#">
                  <image
                    src={playstore}
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
                <Link href="#">
                  <img
                    src={ios}
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
              </div>

              <h3 className="text-white font-semibold text-lg mb-4">
                Follow on
              </h3>
              <div className="flex gap-4">
                {[
                  "Facebook",
                  "Instagram",
                  "Twitter",
                  "LinkedIn",
                  "YouTube",
                ].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default BlogDetailPage;
