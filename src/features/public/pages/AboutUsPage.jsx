import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Users,
  School,
  ChartLine,
  DollarSign,
  Laptop,
  BadgeCheck,
} from "lucide-react"; // Import icons

import herosection from "../../../assets/aboutUs/heroOther/heroSection.png";
import facilities from "../../../assets/aboutUs/heroOther/Facilities.png";
import empoweringphoto from "../../../assets/aboutUs/heroOther/empowering.png";
import insone from "../../../assets/aboutUs/instructor/instructor-1.png";
import instwo from "../../../assets/aboutUs/instructor/instructor-2.png";
import insthree from "../../../assets/aboutUs/instructor/instructor-3.png";
import insfour from "../../../assets/aboutUs/instructor/instructor-4.png";
import citi from "../../../assets/aboutUs/otherIcon/citi.svg";
import cisco from "../../../assets/aboutUs/otherIcon/cisco.svg";
import ericsson from "../../../assets/aboutUs/otherIcon/ericsson.svg";
import hewlett from "../../../assets/aboutUs/otherIcon/hewlett.svg";
import samsung from "../../../assets/aboutUs/otherIcon/samsung.svg";
import vimeo from "../../../assets/aboutUs/otherIcon/vimeo.svg";
import volkswagen from "../../../assets/aboutUs/otherIcon/volkswagen.svg";
import tone from "../../../assets/Testimonial/T1.png";
import ttwo from "../../../assets/Testimonial/T2.png";
import tthree from "../../../assets/Testimonial/T3.png";
import tfour from "../../../assets/Testimonial/T4.png";

const AboutUsPage = () => {
  const logos = [hewlett, volkswagen, cisco, samsung, vimeo, citi, ericsson];
  const testimonials = [
    {
      name: "Taylor",
      image: tone,
      rating: 4.5,
      text: "While online platforms are often cheaper than traditional education, costs for certificates or subscriptions can add up.",
    },
    {
      name: "Maxwell",
      image: ttwo,
      rating: 4.5,
      text: "Earning a certificate from a recognized institution is a significant advantage for career development.",
    },
    {
      name: "Jones",
      image: tthree,
      rating: 4.5,
      text: "Many courses are seen as academically rigorous, with content provided by top universities.",
    },
    {
      name: "Oliva",
      image: tfour,
      rating: 4.5,
      text: "The platform offers a wide range of courses from various fields, allowing for diverse learning opportunities.",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // ... (previous sections of the component remain unchanged)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative ">
        <img
          src={herosection}
          alt="Background"
          className="object-cover brightness-50 h-[400px] w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About us
          </h1>
        </div>
      </div>
      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Laptop,
                title: "Learn from everywhere",
                description: "Access courses from anywhere",
              },
              {
                icon: DollarSign,
                title: "Save money",
                description: "Learn while saving costs here",
              },
              {
                icon: BookOpen,
                title: "Flexible learning",
                description: "Learn at your own pace",
              },
              {
                icon: GraduationCap,
                title: "Unlimited certificates",
                description: "Earn unlimited certificates",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Empowering Journey */}
      <section className="py-16  px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src={empoweringphoto}
                alt="Student with books"
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Empowering Your Journey to Success
              </h2>
              <p className="text-gray-600 mb-6">
                Our platform offers expertly crafted courses, personalized
                learning paths, and expert-level support to help you reach your
                goals faster.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Access to exclusive webinars and workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>95% of students report skill improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Courses aligned with industry standards</span>
                </li>
              </ul>
              <Button className="mt-8 bg-emerald-500 text-white hover:bg-emerald-600">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {[
              {
                number: "10K+",
                label: "Total Achievement",
                icon: <ChartLine className="h-8 w-8 text-emerald-500" />,
              },
              {
                number: "16000+",
                label: "Total Students",
                icon: <Users className="h-8 w-8 text-emerald-500" />,
              },
              {
                number: "15K+",
                label: "Classes Complete",
                icon: <School className="h-8 w-8 text-emerald-500" />,
              },
              {
                number: "100K+",
                label: "Certified Teachers",
                icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-[#EFFAF4] p-3 rounded">
                <div className="flex flex-row items-center justify-center gap-1">
                  <div className="w-8 h-8">
                    <span className=" w-full h-full object-contain">
                      {stat.icon}
                    </span>
                  </div>
                  <div className=" text-start">
                    <span className="text-2xl md:text-3xl font-bold text-black">
                      {stat.number}
                    </span>
                    <p className="text-gray-800 mt-2">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Instructors */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            Our Experience Instructor
          </h2>
          <p className=" text-center justify-center mb-10">
            {" "}
            Learn from the best and achieve your goals with our exceptional
            instructors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Johns Than Doe",
                role: "Professor at Oxford College",
                rating: "4.5",
                img: insone,
              },
              {
                name: "James Carter",
                role: "Professor at Stanford",
                rating: "4.8",
                img: instwo,
              },
              {
                name: "Ryan Walker",
                role: "Professor at Digital College",
                rating: "4.3",
                img: insthree,
              },
              {
                name: "Ethan Bennett",
                role: "Professor at State College",
                rating: "4.5",
                img: insfour,
              },
            ].map((instructor, index) => (
              <Card key={index}>
                <img src={instructor.img} className=" ml-4 mt-2" />
                <CardContent>
                  <div className="flex items-center justify-between gap-1 mt-2">
                    <h3 className="font-semibold">{instructor.name}</h3>
                    <div>
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm">{instructor.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{instructor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className=" py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between">
            {logos.map((logo, index) => (
              <div key={index} className="h-12 relative">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Facilities */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="relative h-[500px] mb-7">
              <img
                src={facilities}
                alt="Student using platform"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
              <p className="text-gray-600 mb-8">
                Our platform is designed for learners with busy schedules,
                allowing you to learn whenever it's convenient for you.
              </p>
              <div className="space-y-6">
                <div>
                  <div className=" flex gap-2 ">
                    <span className="text-emerald-500">
                      <BadgeCheck />{" "}
                    </span>
                    <h3 className="font-semibold mb-2">
                      Interactive Learning Tools
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Enhance your learning experience with interactive tools,
                    including quizzes, practical exercises, and a discussion
                    forum where you can ask questions and engage with peers.
                  </p>
                </div>
                <div>
                  <div className=" flex gap-2">
                    <span className=" text-emerald-500">
                      {" "}
                      <BadgeCheck />
                    </span>
                    <h3 className="font-semibold mb-2">
                      Live Support & Guidance
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Our team is available 24/7 to help with any technical issues
                    or course questions, ensuring a smooth learning experience.
                  </p>
                </div>
                <div>
                  <div className=" flex gap-2">
                    <span className=" text-emerald-500">
                      {" "}
                      <BadgeCheck />
                    </span>
                    <h3 className="font-semibold mb-2">
                      Mobile-friendly Learning
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Take your learning on the go! Our platform is optimized for
                    mobile, so you can access your courses wherever you are, on
                    any device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      {/* <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Some valuable feedback from our <br /> students
          </h2>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="min-w-[300px] md:min-w-[350px]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 relative">
                        <Image
                          src="/placeholder.svg"
                          alt={`Student ${index + 1}`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Dr. Maxwell</h3>
                        <div className="flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Great course platform with excellent content. The
                      instructors are knowledgeable and the material is
                      well-presented."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2">
              <Button size="icon" variant="outline" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2">
              <Button size="icon" variant="outline" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Some valuable feedback from our <br /> students
          </h2>
          <div className="relative mt-5">
            <div className="flex justify-center items-center gap-4">
              {testimonials.map((testimonial, index) => {
                const isCenter = index === currentTestimonial;
                return (
                  <Card
                    key={index}
                    className={`bg-[#EFFAF4] transition-all mt-3 p-3 duration-300 ${
                      isCenter
                        ? " z-10 scale-105 opacity-100"
                        : "scale-90 opacity-40"
                    }`}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>
                                {i < Math.floor(testimonial.rating) ? "★" : "☆"}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className=" text-center justify-center space-x-3 mt-5">
              <Button
                className="rounded-full w-8 h-8 bg-[#F5F5F5] hover:bg-[#ebe2e2]"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4 text-black" />
              </Button>

              <Button
                className="rounded-full h-8 w-8 flex items-center justify-center bg-[#F5F5F5] hover:bg-[#ebe2e2]"
                onClick={nextTestimonial}
              >
                <ChevronRight className=" text-black" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
