"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Clock,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import CurriculumPage from "../pages/CurriculumPage";

const CourseDetailCurriculum = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-emerald-50/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/courses" className="hover:text-emerald-500">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <span>Course detail</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <div className="bg-emerald-50/50 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            JavaScript for Beginner
          </h1>
          <p className="text-gray-600 mb-6">
            JavaScript is the popular programming language which powers web
            pages and web applications. This course will get you started coding
            in JavaScript.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="secondary">
              <BookOpen className="w-4 h-4 mr-1" />
              Beginner
            </Badge>
            <Badge variant="secondary">
              <GraduationCap className="w-4 h-4 mr-1" />
              1000 Enrolled
            </Badge>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
              <span className="ml-1 text-sm">4.5/5.0</span>
            </div>
            <Badge variant="secondary">English</Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="">
          {/* Left Content grid grid-cols-1 lg:grid-cols-3 gap-8 */}
          

          {/* Right Sidebar */}
          <CurriculumPage />
         
        </div>

        {/* Related Courses */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Top listed courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Essential video editing techniques",
                instructor: "Ms.Ella",
                price: "$12.00",
                rating: 4.5,
                students: 4500,
                image: "/placeholder.svg",
              },
              {
                title: "Fundamental of business strategy",
                instructor: "Olivia",
                price: "Free",
                rating: 4.5,
                students: 4000,
                image: "/placeholder.svg",
              },
              {
                title: "Content writing essential",
                instructor: "Lucy",
                price: "$15.00",
                rating: 4.5,
                students: 4500,
                image: "/placeholder.svg",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <div className="relative h-48">
                    {/* <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{course.instructor}</span>
                    <span>{course.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1">{course.rating}</span>
                    </div>
                    <span>{course.students} Students</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-emerald-500">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our News Letter
              </h2>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white"
                />
                <Button className="bg-black hover:bg-gray-900 text-white">
                  Subscribe Now
                </Button>
              </div>
            </div>
            <div className="space-y-4 text-white">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>Call on: 0786 778 375 028</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span>Time: 9am to 5pm (Sunday close)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>789 Pine Drive, Apt 3B</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>Pathway67@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailCurriculum;
