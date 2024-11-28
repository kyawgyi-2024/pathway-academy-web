import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
// import Image from "next/image";

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouFormPage = () => {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-emerald-500 p-8">
            <Check className="h-12 w-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-emerald-500 mb-6">Thank You</h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for submitting your application to our Pathway Academy
          Education. We will be touch and contact you soon.
        </p>

        <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
          <Link href="/">Back Home Page</Link>
        </Button>

        <div className="mt-16">
          <p className="text-gray-600 mb-4">Follow us on</p>
          {/* <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-emerald-500 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-emerald-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-emerald-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-emerald-500 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-700 p-2 rounded-md text-white hover:bg-emerald-500 transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default ThankYouFormPage;
