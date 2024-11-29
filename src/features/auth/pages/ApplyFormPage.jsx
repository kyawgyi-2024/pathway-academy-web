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
import { CalendarIcon } from "lucide-react";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuX,
  LuYoutube,
} from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Footer from "../../public/components/Footer";
import Logo from "../../../assets/logo.svg";
import bgImg from "../../../assets/formPhotos/applyForm.png";
import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";


const ApplyFormPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className=" container mx-auto">
        <header className="flex items-center justify-between px-6 py-4">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Pathway Academy Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex gap-4">
            <Link to={"/signin"}>
              <Button variant="outline">Log in</Button>
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Apply now
            </Button>
          </div>
        </header>
      </div>

      {/* Form Section */}
      <div style={{ backgroundImage: `url(${bgImg})` }}>
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
                      className={cn(
                        "w-full justify-start text-left font-normal"
                      )}
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
              <Link to={"/thankform"}>
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  Submit
                </Button>
              </Link>
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
            <div className="flex space-x-3 items-center justify-center">
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
        </main>
      </div>

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

export default ApplyFormPage;
