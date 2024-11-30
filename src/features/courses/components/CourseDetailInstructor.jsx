import {
  Star,
  Heart,
  Clock,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const CourseDetailInstructor = () => {
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
              <input
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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {/* Tabs */}
          <div className="mb-8 border-b">
            <div className="flex gap-8">
              {["Overview", "Curriculum", "Instructor", "Reviews", "FAQs"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`border-b-2 pb-4 text-sm ${
                      tab === "Instructor"
                        ? "border-emerald-500 text-emerald-500"
                        : "border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Instructor Profile */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="aspect-square overflow-hidden rounded-lg">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Instructor"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                /> */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">About an instructor</h2>
              <h3 className="mt-4 text-lg font-semibold">Lily Alcelus</h3>
              <p className="text-sm text-emerald-500">Software Engineer</p>
              <div className="mt-4 flex gap-2">
                {["facebook", "twitter", "linkedin", "github"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                Lily Alcelus is a skilled web developer and JavaScript
                instructor with over 10 years of industry experiences.
                Specializing in JavaScript, HTML, CSS, and popular frameworks
                like React and Vue, they've worked on projects for RBZ known for
                their clear, supportive teaching style.
              </p>
            </div>
          </div>
        </div>

        {/* Course Info Card */}
        <div className="h-fit rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-emerald-500">
                $18.00
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                $30.00
              </span>
            </div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Heart className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <button className="mb-3 w-full rounded-md bg-emerald-500 py-2 text-white">
            Apply Now
          </button>
          <button className="mb-6 w-full rounded-md border py-2 text-gray-600">
            Try for free
          </button>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4" />
                Lesson
              </span>
              <span className="text-sm">15</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                Duration
              </span>
              <span className="text-sm">2hr 30min</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4" />
                Level
              </span>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                Certificate
              </span>
              <span className="text-sm">Yes</span>
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

export default CourseDetailInstructor;
