import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  LucideChartBarIncreasing,
  LucideChartNoAxesColumnIncreasing,
  LucideGlobe,
  LucideGraduationCap,
  LucideStar,
} from "lucide-react";
import { Link } from "react-router-dom";
import courseVideo from "../../../assets/courseDetail.mp4";
import courseone from "../../../assets/course/CourseList/course1.png";
import coursetwo from "../../../assets/course/CourseList/course2.png";
import coursethree from "../../../assets/course/CourseList/course3.png";
import ella from "../../../assets/course/avator/Ella.png";
import oliva from "../../../assets/course/avator/Oliva.png";
import lucy from "../../../assets/course/avator/Lucy.png";

const CourseDetailFaq = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              {/* <Image
                src="/placeholder.svg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              /> */}
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
              <input
                type="search"
                placeholder="Search option..."
                className="w-64 rounded-md border px-3 py-1 text-sm"
              />
            </div>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <div className="bg-[#EFFAF4]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/courses">Courses</Link>
              <span>/</span>
              <span>Course detail</span>
            </div>
            <h1 className="text-3xl font-bold mt-3">JavaScript for Beginner</h1>
            <p className="text-muted-foreground mt-3">
              JavaScript is the popular programming language which powers web
              pages and web <br /> applications. This course will get you
              started coding in JavaScript.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant="secondary" className=" gap-2">
                <span>
                  <LucideChartNoAxesColumnIncreasing />
                </span>
                Beginner
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <span>
                  <LucideGraduationCap />
                </span>
                1000 Enrolled
              </span>
              <div className="flex items-center gap-2">
                <span>
                  <LucideStar />
                </span>
                <span className="text-sm">4.5</span>
                <span className="text-sm">/</span>
                <span className="text-sm">5.0</span>
              </div>
              <Badge variant="secondary" className=" items-center gap-2">
                <span>
                  <LucideGlobe />
                </span>
                English
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="faqs" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              <TabsContent value="faqs" className="mt-6">
                <h2 className="text-2xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What will I learn in this course?
                    </AccordionTrigger>
                    <AccordionContent>
                      You'll learn JavaScript fundamentals including variables,
                      functions, arrays, objects, DOM manipulation, and
                      asynchronous programming. By the end, you'll be able to
                      build interactive, dynamic web pages and small projects.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How long will it take to complete?
                    </AccordionTrigger>
                    <AccordionContent>
                      The course is designed to be completed in 2 hours and 30
                      minutes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are there any projects?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you'll work on several hands-on projects throughout
                      the course.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Will I receive a certificate?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, upon completion you'll receive a certificate of
                      completion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Card */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <video controls>
                  <source src={courseVideo} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    $18.00 <span>$20.00</span>{" "}
                    <Badge className=" bg-[#FD7E14]">-50%</Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 gap-7 flex items-center justify-between">
                  <Button
                    variant="outline"
                    className=" px-10 outline-emerald-400"
                  >
                    Try for free
                  </Button>

                  <Button className=" px-10 bg-emerald-500 hover:bg-emerald-600">
                    Apply Now
                  </Button>
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold">This course included</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Lesson</span>
                      <span>18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span>2h 30min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level</span>
                      <span>Beginner</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language</span>
                      <span>English</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate</span>
                      <span>Yes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12 border p-5 gap-5 rounded w-[394.66px] ml-auto">
          <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2 justify-start">
            {[
              "Business",
              "Web development",
              "Data science",
              "Machine learning",
              "Python",
              "Html",
              "CSS",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer rounded py-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Courses */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Top listed courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Essential video editing techniques",
                instructor: "Ms.Ella",
                price: "$12.00",
                image: courseone,
                avator: ella,
                badge: "Video editing",
              },
              {
                title: "Fundamental of business strategy",
                instructor: "Olivia",
                price: "Free",
                image: coursetwo,
                avator: oliva,
                badge: "Business",
              },
              {
                title: "Content writing essential",
                instructor: "Lucy",
                price: "$15.00",
                image: coursethree,
                avator: lucy,
                badge: "Content writing",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#0CBC87]">
                    {course.badge}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{course.title}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={course.avator}
                        alt={course.instructor}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm">{course.instructor}</span>
                    </div>
                    <span className="font-semibold text-emerald-500">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-emerald-500 rounded-lg text-white">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Join Our News Letter
                </h2>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded px-3 py-2 text-black"
                  />
                  <Button className="bg-black hover:bg-gray-900">
                    Subscribe Now
                  </Button>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>Call on: 0786 778 372 028</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Time: 9am to 5pm (Sunday closed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>759 Pine Drive, Apt. 38</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Pathway@email.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetailFaq;
