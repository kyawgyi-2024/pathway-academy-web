import React from "react";
import Logo from "../../../assets/logo.svg"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      {" "}
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src={Logo} alt="Pathway Academy" className="h-10 w-20" />
          </Link>
          <div className="hidden md:flex ml-10 space-x-8">
            {["Home", "About us", "Courses", "Blog", "Contact us"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Search option..."
              className="pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <Button variant="outline">Sign in</Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Sign up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
