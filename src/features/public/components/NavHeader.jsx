import React from "react";
import Nav from "./NavBar";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react"; // Adjust icons if using a different library
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navheader = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const nav = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navHandler = (route) => {
    nav(route);
    setIsSidebarOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="cursor-pointer" onClick={() => navHandler("/")}>
            <img src={Logo} alt="Logo" className="h-10 w-20" />
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex gap-8">
            {[
              { text: "Home", path: "/" },
              { text: "About us", path: "/about-us" },
              { text: "Courses", path: "/courses" },
              { text: "Blogs", path: "/blog" },
              { text: "Contact us", path: "/contact-us" },
            ].map(({ text, path: navPath }) => (
              <span
                key={navPath}
                className="cursor-pointer text-gray-700 hover:text-emerald-500 transition-colors"
                onClick={() => navHandler(navPath)}
              >
                <Nav path={path} origin={navPath} text={text} />
              </span>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleSidebar}
            className="md:hidden relative z-50"
          >
            {isSidebarOpen ? (
              <X size={30} className="text-gray-800" />
            ) : (
              <Menu size={30} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Hidden on Mobile) */}
          <div className="hidden md:block relative">
            <Input
              type="search"
              placeholder="Search option..."
              className="w-64 rounded-md border px-3 py-1 text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/signin">
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </Link>
            <Link to="/apply-form">
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                Apply now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out z-40 flex flex-col items-start p-6 gap-4 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {[
          { text: "Home", path: "/" },
          { text: "About us", path: "/about-us" },
          { text: "Courses", path: "/courses" },
          { text: "Blogs", path: "/blog" },
          { text: "Contact us", path: "/contact-us" },
        ].map(({ text, path: navPath }) => (
          <span
            key={navPath}
            className="cursor-pointer text-gray-800 hover:text-emerald-500 text-lg transition-colors"
            onClick={() => {
              navHandler(navPath);
              toggleSidebar();
            }}
          >
            {text}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navheader;
