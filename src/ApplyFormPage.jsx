"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { LuFacebook } from "react-icons/lu";
import { Link } from "react-router-dom";

const ApplyFormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        {/* <Image
          src="/placeholder.svg"
          alt="Pathway Academy Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        /> */}
        <div className="flex gap-4">
          <Button variant="ghost">Sign in</Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Sign up
          </Button>
        </div>
      </header>

      {/* Form Section */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          School Application Form
        </h1>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Pick a date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>

          <div className="space-y-2">
            <Label>Which course do you want to enroll in?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Strategy</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="webdesign">Web Design</SelectItem>
                <SelectItem value="marketing">Digital Marketing</SelectItem>
                <SelectItem value="content">Content Writing</SelectItem>
                <SelectItem value="language">Language</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us a few words"
              className="min-h-[120px]"
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Submit
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Follow us on</p>
          {/* <div className="flex justify-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-emerald-500">
              <LuFacebookacebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-500">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-500">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-500">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-500">
              <Youtube className="h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 mt-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
          <div>
            {/* <Image
              src="/placeholder.svg"
              alt="Pathway Academy Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            /> */}
            <p className="text-sm text-gray-400">
              Pathway Academy provides the tools and guidance to turn your goals
              into achievements
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#">Business Strategy</Link>
              </li>
              <li>
                <Link href="#">Development</Link>
              </li>
              <li>
                <Link href="#">Web Design</Link>
              </li>
              <li>
                <Link href="#">Digital Marketing</Link>
              </li>
              <li>
                <Link href="#">Content Writing</Link>
              </li>
              <li>
                <Link href="#">Language</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Sign up student</Link>
              </li>
              <li>
                <Link href="#">Sign up instructor</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">App available on</h3>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="block">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                /> */}
              </Link>
              <Link href="#" className="block">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                /> */}
              </Link>
            </div>
            <h3 className="font-bold mb-4">Follow on</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                Facebook
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                Instagram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplyFormPage;
