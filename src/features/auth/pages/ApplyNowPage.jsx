"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import signup from "../../../assets/Login/signUp.svg";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import google from "../../../assets/Login/google.png";
import facebook from "../../../assets/Login/facebook.png";
import apple from "../../../assets/Login/apple.png";

const ApplyNowPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 container mx-auto">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Pathway Academy Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Illustration */}
          <div className="lg:w-1/2">
            <img
              src={signup}
              alt="Sign up photo"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 max-w-md w-full">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-gray-500">
                  I already have an account{" "}
                  <Link
                    to={"/signin"}
                    className="text-emerald-500 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="save" />
                  <label
                    htmlFor="save"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Save password
                  </label>
                </div>

                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Create an account
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full">
                  <img
                    src={google}
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2 h-4 w-4"
                  />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img
                    src={facebook}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="mr-2 h-4 w-4"
                  />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full">
                  <img
                    src={apple}
                    alt="Apple"
                    width={20}
                    height={20}
                    className="mr-2 h-4 w-4"
                  />
                  Apple
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowPage;
