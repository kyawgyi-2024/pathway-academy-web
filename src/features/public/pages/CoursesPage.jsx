import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, LucideHeart, MoreVertical, Star } from "lucide-react";
import heroSection from "../../../assets/course/heroSection.png";
import c1 from "../../../assets/course/CourseList/course1.png";
import c2 from "../../../assets/course/CourseList/course2.png";
import c3 from "../../../assets/course/CourseList/course3.png";
import c4 from "../../../assets/course/CourseList/course4.png";
import c5 from "../../../assets/course/CourseList/course5.png";
import c6 from "../../../assets/course/CourseList/course6.png";
import c7 from "../../../assets/course/CourseList/course7.png";
import c8 from "../../../assets/course/CourseList/course8.png";
import a1 from "../../../assets/course/avator/Ella.png";
import a2 from "../../../assets/course/avator/Lucy.png";
import a3 from "../../../assets/course/avator/Oliva.png";
import a4 from "../../../assets/course/avator/Mr. Lucas.png";
import a5 from "../../../assets/course/avator/Mr. Ethan.png";
import a6 from "../../../assets/course/avator/Ms. Emma.png";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Essential video editing techniques",
      description:
        "Learn to create engaging videos using industry-leading software. Master transitions, effects, and storytelling through visuals",
      category: "Video editing",
      lessons: 18,
      duration: "2hr 30min",
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
    {
      id: 7,
      title: "Essentials of Digital Photography",
      description:
        "Capture stunning images with pro composition, lighting, and editing. Perfect for both beginners and professionals.",
      category: "Photography",
      lessons: 22,
      duration: "3hr 45min",
      rating: 4.8,
      students: 3500,
      price: "$17.00",
      instructor: {
        name: "Ms. Emma",
        avatar: a6,
      },
      image: c7,
    },
    {
      id: 8,
      title: "Digital Marketing Mastery",
      description:
        "Master the art of digital marketing with a comprehensive guide to SEO, social media, PPC, and email marketing and analytics.",
      category: "Marketing",
      lessons: 28,
      duration: "5hr 45min",
      rating: 4.7,
      students: 4200,
      price: "$25.00",
      instructor: {
        name: "Ms. Emma",
        avatar: a6,
      },
      image: c8,
    },

    // Add more courses as needed...
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="Pathway Academy Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About us
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium text-emerald-500"
              >
                Courses
              </Link>
              <Link href="/blog" className="text-sm font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search option..."
                className="w-64"
              />
            </div>
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              Apply Now
            </Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="relative">
        <img src={heroSection} alt="Courses Hero" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Courses</h1>
        </div>
      </div>

      {/* Course Listing */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">Showing 1-8 of 32 result</p>
          <select className="border rounded-md px-3 py-1.5 text-sm bg-white">
            <option>Sort by New</option>
            <option>Sort by Popular</option>
            <option>Sort by Price</option>
          </select>
        </div>

        <div className="space-y-6">
          {courses.map((course) => (
            <Card key={course.id} className="p-4">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Course Image */}
                <div className="relative w-full md:w-80 h-auto rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className=" object-center"
                  />
                  <span className="absolute top-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded text-sm">
                    {course.category}
                  </span>
                </div>

                {/* Course Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.lessons} Lesson</span>
                        </div>
                        <span>{course.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold hover:text-emerald-500 transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <span className="text-gray-400 hover:text-gray-600">
                      <LucideHeart className="w-5 h-5" />
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {course.description}
                  </p>

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
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(course.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300 fill-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {course.students} Students
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`font-semibold ${
                          course.price === "Free" ? "text-emerald-500" : ""
                        }`}
                      >
                        {course.price}
                      </span>
                      <Link to={"/course-detailfaq"}>
                        <Button
                          variant="variant"
                          className="bg-emerald-500 text-white border-emerald-200 hover:bg-emerald-400"
                        >
                          Know Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      {/* <section className="bg-emerald-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-400/20 rounded-bl-full" />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our News Letter
            </h2>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white"
              />
              <Button className="bg-black hover:bg-gray-900 text-white px-6">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="/placeholder.svg"
                  alt="Pathway Academy"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </Link>
              <p className="text-gray-400">
                Pathway Academy provides the tools and guidance to turn your
                goals into achievements
              </p>
            </div>

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

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick links
              </h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact us",
                  "Blog",
                  "Sign up student",
                  "Sign up instructor",
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

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                App available on
              </h3>
              <div className="flex gap-4 mb-8">
                <Link href="#">
                  <Image
                    src="/placeholder.svg"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/placeholder.svg"
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
              <div className="flex gap-4">
                {[
                  "Facebook",
                  "Instagram",
                  "Twitter",
                  "LinkedIn",
                  "YouTube",
                ].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CoursesPage;
