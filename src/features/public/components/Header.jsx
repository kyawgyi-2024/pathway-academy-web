import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./NavBar";
import { Menu, X } from "lucide-react";

const Header = () => {
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
    <div>
      {/* <header
        className={
          "flex bg-white  flex-col top-0 z-50  sticky px-3 items-center  h-[72px] justify-center"
        }
      ></header> */}

      {/* Navigation */}
      <header className="border-b flex bg-white flex-col top-0 z-50  sticky px-3 items-center">
        <div className="container mx-auto flex justify-between h-16 px-4 py-2
        relative
        ">
          <div className="flex items-center gap-6">
            <nav className="cursor-pointer" onClick={() => navHandler("/")}>
              <img src={Logo} className="h-10 w-20" />
            </nav>
            <button
              onClick={toggleSidebar}
              className="md:hidden h-full w-10 transition-all duration-200"
            >
              <Menu
                className={`absolute top-0 right-0 transition-all  duration-300 ease-in-out ${
                  isSidebarOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
                size={30}
              />
              <X
                className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
                  isSidebarOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                size={30}
              />
            </button>

            <nav
              className={`hidden md:flex flex-row gap-16 justify-center ms-24 items-center mb-7
                 text-md z-40 bg-white rounded-md w-full transition-all md:relative md:top-0 duration-300 ease-in-out top-14 p-3 md:p-0  absolute h-auto md:text-[14px] leading-[22px] font-lato md:h-[22px] 
                
                ${
                isSidebarOpen
                  ? " opacity-100  translate-y-0  h-auto"
                  : " opacity-0 z-0 pointer-events-none md:pointer-events-auto  -translate-y-1/3 md:translate-y-0 md:max-h-none md:opacity-100"
              }`}
            >
              <span
                className="cursor-pointer  "
                onClick={() => navHandler("/")}
              >
                <Nav path={path} origin="/" text={"Home"} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => navHandler("/about-us")}
              >
                <Nav path={path} origin="/about-us" text={"About us"} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => navHandler("/courses")}
              >
                <Nav path={path} origin="/courses" text={"Courses"} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => navHandler("/blog")}
              >
                <Nav path={path} origin="/blog" text={"Blogs"} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => navHandler("/contact-us")}
              >
                <Nav path={path} origin="/contact-us" text={"Contact us"} />
              </span>
            </nav>
          </div>
          <div className=" flex justify-end gap-4 ml-5">
            <div className="hidden md:flex relative md:mr-4 items-center">
              <Input
                type="search"
                placeholder="Search option..."
                className="w-64 rounded-md border px-3 py-1 text-sm"
              />
            </div>

            {/* form button */}
            <div className="flex items-center gap-2">
            <Link to={"/signin"}>
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </Link>
            <Link to={"/apply-form"}>
              {" "}
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                Apply now
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
