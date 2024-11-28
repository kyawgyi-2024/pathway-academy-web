import React from "react";
import { Link } from "react-router-dom";
import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import Logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-auto">
      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to={"/"}>
              <img src={Logo} alt="Pathway Academy" className="h-10" />
            </Link>
            <p className="text-sm">
              Pathway Academy provides the tools and guidance to turn your goals
              into achievements
            </p>
          </div>

          {/* Our Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Service</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Business Strategy",
                "Development",
                "Web Design",
                "Digital Marketing",
                "Content Writing",
                "Language",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Contact us",
                "Blog",
                "Sign up student",
                "Sign up instructor",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">App available on</h3>
            <div className="flex gap-2">
              <Link href="#">
                <img
                  src={playstore}
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </Link>
              <Link href="#">
                <img
                  src={ios}
                  alt="Download on the App Store"
                  className="h-10"
                />
              </Link>
            </div>
            <h3 className="text-white font-semibold mt-6 mb-4">Follow on</h3>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"].map(
                (social) => (
                  <Link key={social} href="#" className="hover:text-white">
                    {social}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
