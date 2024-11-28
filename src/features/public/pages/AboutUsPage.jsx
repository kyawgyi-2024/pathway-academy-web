
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
} from "lucide-react";
import herosection from "../../../assets/aboutUs/heroOther/heroSection.png";

const AboutUsPage = () => {
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
                icon: Globe,
                title: "Learn from everywhere",
                description: "Access courses from anywhere",
              },
              {
                icon: Award,
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
      <section className="py-16 bg-gray-50 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              {/* <Image
                src="/placeholder.svg"
                alt="Student with books"
                fill
                className="object-cover rounded-lg"
              /> */}
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
              <Button className="mt-8 bg-emerald-500 hover:bg-emerald-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Total Achievement" },
              { number: "16000+", label: "Total Students" },
              { number: "15K+", label: "Classes complete" },
              { number: "100K+", label: "Certified Teachers" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8">
                    {/* <Image
                      src="/placeholder.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    /> */}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-emerald-600">
                    {stat.number}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 bg-gray-50 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Experience Instructor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Johns Than Doe",
                role: "Professor at Oxford College",
                rating: "4.5",
              },
              {
                name: "James Carter",
                role: "Professor at Stanford",
                rating: "4.8",
              },
              {
                name: "Ryan Walker",
                role: "Professor at Digital College",
                rating: "4.3",
              },
              {
                name: "Ethan Bennett",
                role: "Professor at State College",
                rating: "4.5",
              },
            ].map((instructor, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  {/* <Image
                    src="/placeholder.svg"
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{instructor.name}</h3>
                  <p className="text-sm text-gray-600">{instructor.role}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm">{instructor.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-32 h-12 relative">
                {/* <Image
                  src="/placeholder.svg"
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              {/* <Image
                src="/placeholder.svg"
                alt="Student using platform"
                fill
                className="object-cover rounded-lg"
              /> */}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
              <p className="text-gray-600 mb-8">
                Our platform is designed for learners with busy schedules,
                allowing you to learn whenever it's convenient for you.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">
                    Interactive Learning Tools
                  </h3>
                  <p className="text-gray-600">
                    Enhance your learning experience with interactive tools,
                    including quizzes, practical exercises, and a discussion
                    forum where you can ask questions and engage with peers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Live Support & Guidance
                  </h3>
                  <p className="text-gray-600">
                    Our team is available 24/7 to help with any technical issues
                    or course questions, ensuring a smooth learning experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Mobile-friendly Learning
                  </h3>
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
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Some valuable feedback from our students
          </h2>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="min-w-[300px] md:min-w-[350px]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 relative">
                        {/* <Image
                          src="/placeholder.svg"
                          alt={`Student ${index + 1}`}
                          fill
                          className="rounded-full object-cover"
                        /> */}
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
      </section>
    </div>
  );
};

export default AboutUsPage;
