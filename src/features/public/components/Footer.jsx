import React from "react";
import { Link } from "react-router-dom";
import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import Logo from "../../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuX,
  LuYoutube,
} from "react-icons/lu";
import Container from "../../../components/Container";

const Footer = () => {
  return (
    <div className=" mt-auto">
      {/* Newsletter Section */}
      <Container>
        {/* <section className="bg-emerald-500 py-12 px-4 md:px-6 lg:px-8 rounded translate-y-8 z-20 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Join Our News Letter</h2>
              <p className="text-emerald-50">
                Stay updated with our latest news and updates
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button variant="secondary">Subscribe Now</Button>
            </div>
          </div>
        </section> */}
        <div className="bg-emerald-500 py-14 px-4 md:px-6 lg:px-8 rounded translate-y-8 z-20 relative">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Join Our News Letter
                </h2>
                <div className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded-md px-4 py-2"
                  />
                  <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="space-y-4 text-white text-end">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Call on: 0786 778 375 028</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Time: 9am to 5pm Sunday-Friday</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>759 Pine Drive, Apt. 38</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>PathwayC7@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-[#404040] text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img src={Logo} alt="Pathway Academy" className=" h-10 w-20" />
              </Link>
              <p className="text-gray-400">
                Pathway Academy provides the tools and guidance to turn your
                goals into achievements
              </p>
            </div>

            {/* Our Service */}
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

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "About Us", path: "/about-us" },
                  { name: "Contact Us", path: "/contact-us" },
                  { name: "Blog", path: "/blog" },
                  { name: "Sign Up Student", path: "/sign-up/student" },
                  { name: "Sign Up Instructor", path: "/sign-up/instructor" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Community
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Supports", path: "/support" },
                  { name: "Faqs", path: "/faq" },
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Terms & Condition", path: "/terms-condition" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Available on */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                App Available on
              </h3>
              <div className="flex gap-4 mb-8">
                <Link href="#">
                  <img
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
              {/* <div className="flex gap-4">
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
              </div> */}
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
      </footer>
    </div>
  );
};

export default Footer;
