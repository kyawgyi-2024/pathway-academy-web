"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  Star,
  Clock,
  Award,
  Globe,
  BadgeIcon as Certificate,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Link } from "react-router-dom";
const CourseDetailReviews = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-8">
            {/* <Image
            src="/placeholder.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          /> */}
            <div className="hidden space-x-6 md:flex">
              <Link href="#" className="text-sm">
                Home
              </Link>
              <Link href="#" className="text-sm">
                About us
              </Link>
              <Link href="#" className="text-sm text-emerald-500">
                Courses
              </Link>
              <Link href="#" className="text-sm">
                Blog
              </Link>
              <Link href="#" className="text-sm">
                Contact us
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Input
                type="search"
                placeholder="Search option..."
                className="rounded-md border px-3 py-1.5 text-sm"
              />
            </div>
            <Link href="#" className="text-sm">
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-md bg-emerald-500 px-4 py-2 text-sm text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="text-sm text-gray-500">Courses / Course detail</div>
        </div>
      </div>

      {/* Course Header */}
      <div className="bg-gray-50 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold">JavaScript for Beginner</h1>
          <p className="mt-2 text-gray-600">
            JavaScript is the popular programming language which powers web
            pages and web applications. This course will get you started coding
            in JavaScript.
          </p>
          <div className="mt-4 flex gap-4">
            <span className="flex items-center gap-1 text-sm">
              <BookOpen className="h-4 w-4" />
              Beginner
            </span>
            <span className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              1500 Enrolled
            </span>
            <span className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 text-yellow-400" />
              4.5/5.0
            </span>
            <span className="text-sm">English</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex space-x-8 mb-12">
          <a href="#overview" className="text-gray-500 hover:text-gray-900">
            Overview
          </a>
          <a href="#curriculum" className="text-gray-500 hover:text-gray-900">
            Curriculum
          </a>
          <a href="#instructor" className="text-gray-500 hover:text-gray-900">
            Instructor
          </a>
          <a href="#reviews" className="text-emerald-500 font-medium">
            Reviews
          </a>
          <a href="#faqs" className="text-gray-500 hover:text-gray-900">
            FAQs
          </a>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-8">Our student reviews</h1>

            {/* Rating Overview */}
            <div className="flex items-start gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.5</div>
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current text-gray-300" />
                </div>
                <div className="text-sm text-gray-500">
                  (Based on today reviews)
                </div>
              </div>

              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating ? "fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-yellow-400 rounded-full"
                        style={{
                          width: `${
                            rating === 5 ? "70%" : rating === 4 ? "20%" : "10%"
                          }`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {[1, 2].map((review) => (
              <div key={review} className="mb-8 pb-8 border-b">
                <div className="flex items-center gap-4 mb-4">
                  {/* <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  /> */}
                  <div>
                    <h3 className="font-medium">Nix Maxwell</h3>
                    <div className="text-sm text-gray-500">
                      Reviewed on Nov 12, 2024
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {review === 1
                    ? "The course content is well-organized that makes students easy to follow, but there is limited amount of examples and exercises for students to learn how to apply the knowledge in real world situation."
                    : "I loved it! Dr. Chuck is extraordinary in his explanations. A great way to start on Javascript programming. As a person that hasn't programmed in years it was an encouraging and educational experience :-)"}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-500">
                    <ThumbsUp className="w-4 h-4" />
                    <span>23</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500">
                    <ThumbsDown className="w-4 h-4" />
                    <span>4</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Course preview"
                width={400}
                height={300}
                className="rounded-lg mb-6 w-full"
              /> */}

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-emerald-500">
                    $18.00
                  </span>
                  <span className="text-gray-500 line-through">$20.00</span>
                </div>
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
                  10% off
                </span>
              </div>

              <div className="flex gap-4 mb-8">
                <button className="flex-1 px-4 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50">
                  Try for free
                </button>
                <button className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                  Apply now
                </button>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-6">
                  This course included
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-gray-400" />
                      <span>Lesson</span>
                    </div>
                    <span>18</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span>Duration</span>
                    </div>
                    <span>2hr 30min</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-gray-400" />
                      <span>Level</span>
                    </div>
                    <span>Beginner</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-gray-400" />
                      <span>Language</span>
                    </div>
                    <span>English</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Certificate className="w-5 h-5 text-gray-400" />
                      <span>Certificate</span>
                    </div>
                    <span>Yes</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Business",
                    "Web development",
                    "Data science",
                    "Machine learning",
                    "Python",
                    "Html",
                    "CSS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-xl font-bold">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Business",
              "Web development",
              "Data science",
              "Machine learning",
              "Python",
              "Html",
              "CSS",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-md border bg-white px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-emerald-500 py-16">
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
            <div className="space-y-4 text-white">
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

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              {/* <Image
              src="/placeholder.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mb-4 h-10 w-10"
            /> */}
              <p className="text-sm text-gray-400">
                Pathway Academy provides the tools and guidance to turn your
                goals into achievements
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Our Service</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Business Strategy</p>
                <p>Development</p>
                <p>Web Design</p>
                <p>Digital Marketing</p>
                <p>Content Writing</p>
                <p>Language</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Quick links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>About Us</p>
                <p>Contact us</p>
                <p>Blog</p>
                <p>Sign up student</p>
                <p>Sign up instructor</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Community</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Support</p>
                <p>Fans</p>
                <p>Privacy policy</p>
                <p>Terms & condition</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetailReviews;
