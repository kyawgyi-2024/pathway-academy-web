import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Smile,
  BookOpen,
  BookOpenCheck,
  LucideStar,
  Star,
  ChartColumn,
  SquarePen,
  Hotel,
  CodeXml,
  Figma,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import {
  Users,
  ChartLine,
  School,
  GraduationCap,
  ChevronLeft,
  PieChart,
  Video,
  FileText,
  Briefcase,
  Globe,
  Code,
  Clock,
  LucideHeart,
  Layout,
  Camera,
  BadgeCheck,
} from "lucide-react"; // Import Lucide icons
import { Link } from "react-router-dom";
import heroSectionhome from "../../../assets/home/heroOther/heroSection.png";
import Empower from "../../../assets/home/heroOther/empowering.png";
import Facility from "../../../assets/home/heroOther/Facilities.png";
import tone from "../../../assets/Testimonial/T1.png";
import ttwo from "../../../assets/Testimonial/T2.png";
import tthree from "../../../assets/Testimonial/T3.png";
import tfour from "../../../assets/Testimonial/T4.png";
import { useState } from "react";
import c1 from "../../../assets/course/CourseList/course1.png";
import c2 from "../../../assets/course/CourseList/course2.png";
import c3 from "../../../assets/course/CourseList/course3.png";
import c4 from "../../../assets/course/CourseList/course4.png";
import c5 from "../../../assets/course/CourseList/course5.png";
import c6 from "../../../assets/course/CourseList/course6.png";
import c7 from "../../../assets/course/CourseList/course7.png";
import c8 from "../../../assets/course/CourseList/course8.png"; // course

import a1 from "../../../assets/course/avator/Ella.png";
import a2 from "../../../assets/course/avator/Lucy.png";
import a3 from "../../../assets/course/avator/Oliva.png";
import a4 from "../../../assets/course/avator/Mr. Lucas.png";
import a5 from "../../../assets/course/avator/Mr. Ethan.png";
import a6 from "../../../assets/course/avator/Ms. Emma.png"; // avator

const HomePage = () => {
  const courses = [
    {
      id: 1,
      title: "Essential video editing techniques",
      description:
        "Learn to create engaging videos using industry-leading software. Master transitions, effects, and storytelling through visuals",
      category: "Video editing",
      lessons: 18,
      duration: "2hr 30min",
      badge: "Beginner",
      rating: 4.5,
      students: 4500,
      price: "$12.00",
      instructor: {
        name: "Ms.Ella",
        avatar: a1,
      },
      image: c1,
    },
    {
      id: 2,
      title: "Fundamental of business strategy",
      description:
        "Introduction to business planning and strategic decision-making. Gain practical insights into crafting effective strategies to achieve business success",
      category: "Business",
      badge: "Advance",
      lessons: 24,
      duration: "2hr 30min",
      rating: 4.8,
      students: 4000,
      price: "Free",
      instructor: {
        name: "Olivia",
        avatar: a2,
      },
      image: c2,
    },
    {
      id: 3,
      title: "Content writing essential",
      description:
        "Develop writing skills to craft compelling articles, blogs, and copy for online platforms. Perfect for aspiring writers and marketers.",
      category: "Content writing",
      badge: "Intermediate",
      lessons: 15,
      duration: "2hr 30min",
      rating: 4.6,
      students: 4500,
      price: "$15.00",
      instructor: {
        name: "Lucy",
        avatar: a3,
      },
      image: c3,
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description:
        "Build responsive and dynamic websites with practical lessons on HTML, CSS, JavaScript, and popular frameworks like React.",
      category: "Development",
      badge: "Beginner",
      lessons: 32,
      duration: "2hr 30min",
      rating: 4.7,
      students: 5000,
      price: "$20.00",
      instructor: {
        name: "Mr. Lucas",
        avatar: a4,
      },
      image: c4,
    },
    {
      id: 5,
      title: "Mastering Conversational Language",
      description:
        "Boost confidence in Spanish with an innovative course designed to improve vocabulary, grammar, and conversational skills.",
      category: "Language",
      badge: "Beginner",
      lessons: 20,
      duration: "2hr 30min",
      rating: 4.5,
      students: 3000,
      price: "$12.00",
      instructor: {
        name: "Mr. Ethan",
        avatar: a5,
      },
      image: c5,
    },
    {
      id: 6,
      title: "Basics of Web Design",
      description:
        "Master the principles of responsive web design websites. Introduction to HTML, CSS, and fundamental user interface layouts.",
      category: "Web Design",
      badge: "Beginner",
      lessons: 25,
      duration: "2hr 30min",
      rating: 4.9,
      students: 4000,
      price: "$25.00",
      instructor: {
        name: "Ms. Emma",
        avatar: a6,
      },
      image: c6,
    },
    // {
    //   id: 7,
    //   title: "Essentials of Digital Photography",
    //   description:
    //     "Capture stunning images with pro composition, lighting, and editing. Perfect for both beginners and professionals.",
    //   category: "Photography",
    //   lessons: 22,
    //   duration: "3hr 45min",
    //   rating: 4.8,
    //   students: 3500,
    //   price: "$17.00",
    //   instructor: {
    //     name: "Ms. Emma",
    //     avatar: a6,
    //   },
    //   image: c7,
    // },
    // {
    //   id: 8,
    //   title: "Digital Marketing Mastery",
    //   description:
    //     "Master the art of digital marketing with a comprehensive guide to SEO, social media, PPC, and email marketing and analytics.",
    //   category: "Marketing",
    //   lessons: 28,
    //   duration: "5hr 45min",
    //   rating: 4.7,
    //   students: 4200,
    //   price: "$25.00",
    //   instructor: {
    //     name: "Ms. Emma",
    //     avatar: a6,
    //   },
    //   image: c8,
    // },

    // Add more courses as needed...
  ]; //coures
  const faqs = [
    {
      question: "What types of courses do you offer?",
      answer:
        "We offer a wide range of courses including Business Strategy, Web Development, Digital Marketing, Content Writing, Language Learning, and more. Our courses are designed for both beginners and advanced learners, with professional instructors and industry-relevant curriculum.",
    },
    {
      question: "Can I access courses on my mobile device?",
      answer:
        "Yes, all our courses are fully accessible on mobile devices through our responsive web platform and dedicated mobile apps available for both iOS and Android. You can learn anytime, anywhere at your convenience.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to create a new password. For security reasons, password reset links expire after 24 hours.",
    },
    {
      question: "Are there any discounts or promotions for courses?",
      answer:
        "Yes, we regularly offer discounts and promotional offers on our courses. Sign up for our newsletter to stay updated on the latest deals. We also provide special discounts for students, early birds, and bulk enrollments.",
    },
    {
      question: "How can I contact my instructor if I have questions?",
      answer:
        "You can contact your instructor directly through our platform's messaging system. Each course has a dedicated discussion forum where you can post questions and interact with both the instructor and fellow students.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for most of our courses. If you're not satisfied with the course content, you can request a refund within 30 days of purchase, provided you haven't completed more than 30% of the course.",
    },
  ]; //faq data

  const categories = [
    { label: "Digital Marketing", icon: PieChart },
    { label: "Video Editing", icon: Video },
    { label: "Content Writing", icon: FileText },
    { label: "Business", icon: Briefcase },
    { label: "Language", icon: Globe },
    { label: "Development", icon: Code },
    { label: "Web Design", icon: Layout },
    { label: "Photography", icon: Camera },
  ]; // catetories

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
  ]; // testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroSectionhome}
            alt="Students learning together"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Tagline */}
            <p className="text-orange-400 text-lg md:text-xl mb-4">
              Your path to knowledge, made simple
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              Your Journey to <br /> Knowledge Starts
              <span className="text-emerald-400 ml-3">Here</span>
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-lg mb-8 max-w-2xl">
              Whether you're here to learn something new, enhance your skills,
              or <br /> explore your passions, Pathway Academy provides the
              tools and <br />
              guidance to turn your goals into achievements.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Learn more
              </Button>
              <Link to={"/courses"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20"
                >
                  Our courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Trustpilot Rating */}
          <div className="mt-10 md:mt-0 md:absolute md:bottom-8 md:right-8 text-end">
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs md:max-w-sm">
              <p className=" flex gap-1 mb-2">
                <span className=" text-emerald-500">
                  <LucideStar />
                </span>
                TrustPilot
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-white bg-emerald-500 text-emerald-500 border"
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg text-gray-800">
                  4.8/5.0
                </span>
              </div>
              <div className=" text-start">
                <span className="text-sm text-gray-600">
                  Reviewed by 365 users
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Course Categories
          </h2>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {label}
                </span>
              </div>
            ))}
          </div> */}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Digital Marketing",
                  label: "5 Courses",
                  icon: <ChartColumn className=" text-emerald-500" />,
                },
                {
                  title: "Video Editor",
                  label: "10 Courses",
                  icon: <Video className=" text-emerald-500" />,
                },
                {
                  title: "Content Writing",
                  label: "5 Courses",
                  icon: <SquarePen className=" text-emerald-500" />,
                },
                {
                  title: "Business",
                  label: "15 Courses",
                  icon: <Hotel className=" text-emerald-500" />,
                },
                {
                  title: "Language",
                  label: "5 Courses",
                  icon: <Globe className=" text-emerald-500" />,
                },
                {
                  title: "develpment",
                  label: "5 Courses",
                  icon: <CodeXml className=" text-emerald-500" />,
                },
                {
                  title: "Web Design",
                  label: "5 Courses",
                  icon: <Figma className=" text-emerald-500" />,
                },
                {
                  title: "Photography",
                  label: "5 Courses",
                  icon: <Camera className=" text-emerald-500" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-start bg-[#EFFAF4] p-3 rounded shadow-md"
                >
                  <div className="flex flex-row items-center justify-center gap-3">
                    <div className="w-8 h-8 text-start">
                      <span className="object-fit">
                        {stat.icon}
                      </span>
                    </div>
                    <div className=" text-end">
                      <p className="text-xl md:text-xl font-bold text-black text-end">
                        {stat.title}
                      </p>
                      <p className="text-gray-800 mt-2 text-start">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="text-emerald-500 border-emerald-500 hover:bg-emerald-50"
            >
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Empowering Your Journey */}
      <section className=" py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={Empower}
                alt="Student success"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className=" text-[#FD7E14] mb-3 text-sm italic">Welcome</p>
              <h2 className="text-3xl font-bold mb-4">
                Empowering Your Journey to Success
              </h2>
              <p className="text-gray-600 mb-6">
                Our platform offers a wide range of courses, personalized
                learning experiences, and expert instructors to guide you
                towards your goals.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Access to premium course content",
                  "Learn at your own pace",
                  "Connect with industry experts",
                  "Earn recognized certifications",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <BadgeCheck className="text-emerald-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Apply now
              </Button>
            </div>
          </div>
          <section className="py-16 px-4 md:px-6 lg:px-8">
            {/* Statistics */}
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
                    icon: (
                      <GraduationCap className="h-8 w-8 text-emerald-500" />
                    ),
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-[#EFFAF4] p-3 rounded"
                  >
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
        </div>
      </section>

      {/* Top Listed Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className=" justify-center items-center text-center text-[#FD7E14]">
            {" "}
            Discover News
          </h4>
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Top Listed Courses
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Essential video editing techniques",
                instructor: "Ella",
                price: "$15.00",
                image: c1,
                instructor: {
                  name: "Ms.Ella",
                  avatar: a1,
                },
              },
              {
                title: "Fundamental of business strategy",
                instructor: "Olivia",
                price: "Free",
                image: c2,
                instructor: {
                  name: "Olivia",
                  avatar: a2,
                },
              },
              {
                title: "Content writing essential",
                instructor: "Lucy",
                price: "$15.00",
                image: c3,
                instructor: {
                  name: "Lucy",
                  avatar: a3,
                },
              },
              {
                title: "Full Stack Web Development",
                instructor: "Mr. Lucas",
                price: "$20.00",
                image: c4,
                instructor: {
                  name: "Mr. Lucas",
                  avatar: a4,
                },
              },
              {
                title: "Mastering Conversational Language",
                instructor: "Mr. Ethan",
                price: "$12.00",
                image: c5,
                instructor: {
                  name: "Mr. Ethan",
                  avatar: a5,
                },
              },
              {
                title: "Basics of Web Design",
                instructor: "Ms. Emma",
                price: "$25.00",
                image: c6,
                instructor: {
                  name: "Ms. Emma",
                  avatar: a6,
                },
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      {course.instructor}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">4.5</span>
                      <span className="text-xs text-gray-500 ml-1">
                        (2,567)
                      </span>
                    </div>
                    <span className="font-bold text-emerald-500">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((course) => (
              <Card key={course.id} className="p-4">
                <div className="grid grid-cols-1 md:flex-row gap-6">
                  {/* Course Image */}
                  <div className="w-full">
                    <img src={course.image} alt={course.title} className="" />
                    <span className="absolute top-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded text-sm">
                      {course.category}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="">
                    <div className="">
                      <div className="items-center flex justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className=" text-white bg-[#FD7E14]"
                        >
                          {course.badge}
                        </Badge>
                        <span className="text-gray-400 hover:text-gray-600 border border-gray-200 p-1 rounded-full">
                          <LucideHeart className="w-5 h-5" />
                        </span>
                      </div>
                      <div className="text-sm flex items-center justify-between text-gray-500">
                        <div className=" flex items-center gap-1 mb-1">
                          <span>
                            <BookOpenCheck className="w-4 h-4 text-[#FD7E14]" />
                          </span>
                          <span>{course.lessons} Lesson</span>
                        </div>

                        <div className="flex gap-1 items-center">
                          <Clock className="w-4 h-4 text-[#FD7E14]" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <p className=" text-emerald-500 text-xl font-semibold">
                        {course.title}
                      </p>
                      <div></div>
                    </div>

                    {/* <p className="text-gray-600 mt-2 flex-wrap overflow-hidden">
                      {course.description}
                    </p> */}
                    <div className=" mt-3 flex justify-between items-center border-b">
                      <div className="flex items-center gap-2">
                        {/* Star Icons */}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        {/* {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(1)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 fill-gray-300"
                            }`}
                          />
                        ))} */}
                        {/* Numerical Rating */}
                        <span className="text-sm text-gray-600">
                          {course.rating}/5.0
                        </span>
                      </div>

                      <span className="text-sm text-gray-500">
                        {course.students} Students
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="text-sm">
                            {course.instructor.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {/* <span className="text-sm text-gray-500">
                            {course.rating}
                          </span> */}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span
                          className={` ${
                            course.price === "Free"
                              ? "text-emerald-600 font-semibold"
                              : " text-emerald-400"
                          }`}
                        >
                          {course.price}
                        </span>
                        {/* <Link to={"/course-detailfaq"}>
                          <Button
                            variant="variant"
                            className="bg-emerald-500 text-white border-emerald-200 hover:bg-emerald-400"
                          >
                            Know Detail
                          </Button>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <div className="relative h-[500px] mb-7">
              <img
                src={Facility}
                alt="Student using platform"
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

      {/* Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Google", "Microsoft", "Apple", "Amazon", "Facebook"].map(
              (client, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all"
                >
                  {/* <Image
                    src="/placeholder.svg"
                    alt={client}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  /> */}
                </div>
              )
            )}
          </div>
        </div>
      </section>

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
                className="rounded-full w-8 h-8 hover:bg-emerald-600 hover:text-emerald-400"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4 text-black " />
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
      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-lg font-medium text-[#FD7E14] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Popular Frequently Ask Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
