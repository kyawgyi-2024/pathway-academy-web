import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=1200"
            alt="Phone receivers background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <h1 className="text-4xl font-bold text-white relative z-10">
          Contact us
        </h1>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          We're here to Help You
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Support",
              address:
                "789 Pine Drive, Apt 3B Greenwood, NY 10920 United States",
              phone: "+1 (800) 123-4567",
              email: "Pathway67@gmail.com",
            },
            {
              title: "Contact Address",
              address: "P.O. Box 3456 Ocean City, FL 33121 United States",
              phone: "+1 (415) 987-6543",
              email: "Pathway67@gmail.com",
            },
            {
              title: "Main Office Address",
              address: "Suite 200 Rivertown, CA 90210 United States",
              phone: "+1 (555) 123-4567",
              email: "Pathway67@gmail.com",
            },
          ].map((info, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                    <span>{info.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-500" />
                    <span>{info.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    <span>{info.email}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Contact illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              <Input type="tel" placeholder="Phone" />
              <Textarea
                placeholder="Tell us a few words"
                className="min-h-[150px]"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Send className="w-4 h-4 mr-2" />
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-122.1234567!3d37.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA3JzM0LjQiTiAxMjLCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Newsletter Section */}
      <section className="bg-emerald-500 py-12 px-4 md:px-6 lg:px-8">
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
      </section>
    </div>
  );
};

export default ContactUsPage;
