import Logo from "../../../assets/logo.svg";
import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBlogSection from "../../../assets/Blog/heroSection.png";
import e1 from "../../../assets/Blog/events/event-1.png";
import e2 from "../../../assets/Blog/events/event-2.png";
import e3 from "../../../assets/Blog/events/event-3.png";
import elb1 from "../../../assets/Blog/latestBlog/blog-1.png";
import elb2 from "../../../assets/Blog/latestBlog/blog-2.png";
import elb3 from "../../../assets/Blog/latestBlog/blog-3.png";
import elb4 from "../../../assets/Blog/latestBlog/blog-4.png";
import elb5 from "../../../assets/Blog/latestBlog/blog-5.png";
import elb6 from "../../../assets/Blog/latestBlog/blog-6.png";

const BlogPage = () => {
  const events = [
    {
      id: 1,
      title:
        "Announcing 10 entry-level Professional Certificates from our biggest partners as digital transformation reshapes the labor market",
      date: "July 28, 2024",
      image: e1,
      featured: true,
    },
    {
      id: 2,
      title:
        "Introducing Pathway Academy's 2024 Outstanding Enterprise Customer Achievement Award Winners",
      date: "Mar 23, 2024",
      image: e2,
    },
    {
      id: 3,
      title: "AI Grading: Faster, Quality Feedback on Pathway Academy",
      date: "July 1, 2024",
      image: e3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={Logo}
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
              <Link href="/courses" className="text-sm font-medium">
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-emerald-500"
              >
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
      <section className="relative">
        <img src={heroBlogSection} alt="Blog Hero" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
        </div>
      </section>

      {/* Events and Announcements */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Events and announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Announcing 10 entry-level Professional Certificates from our biggest partners as digital transformation reshapes the labor market",
                date: "July 28, 2024",
                image: e1,
              },
              {
                title:
                  "Introducing Pathway Academy's 2024 Outstanding Enterprise Customer Achievement Award Winners",
                date: "Mar 15, 2024",
                image: e2,
              },
              {
                title:
                  "AI Grading: Faster, Quality Feedback on Pathway Academy",
                date: "July 1, 2024",
                image: e3,
              },
            ].map((event, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <h3 className="font-semibold group-hover:text-emerald-500 transition-colors">
                  {event.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Events and announcements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Event */}
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <Link
                  key={event.id}
                  href="#"
                  className="group block lg:col-span-1"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-2xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <p className="text-white/80 mb-2">{event.date}</p>
                      <h3 className="text-white text-2xl font-semibold">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}

            {/* Other Events */}
            <div className="space-y-6">
              {events
                .filter((event) => !event.featured)
                .map((event) => (
                  <Link key={event.id} href="#" className="group block">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-5">
                        <div className="relative h-48 overflow-hidden rounded-xl">
                          <img
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="col-span-7 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Skills to Kickstart Your Development Journey",
                excerpt:
                  "Ready to dive into the world of development? Whether you're going to build websites, mobile apps, or something else entirely...",
                author: "Ms.Ella",
                date: "Nov 29 2024",
                image: elb1,
              },
              {
                title: "Revolutionizing the Business Landscape",
                excerpt:
                  "Discover the latest trends shaping the business world and learn how to adapt your strategy in our step-by-step guide...",
                author: "Ms. Sophia Martinez",
                date: "Oct 11 2024",
                image: elb2,
              },
              {
                title: "Finding Work-Life Balance in Online Learning",
                excerpt:
                  "Struggling to balance work, family, and learning? Discover practical tips and strategies for success...",
                author: "Mr. Alex",
                date: "Nov 25 2024",
                image: elb3,
              },
              {
                title: "Designing Your First Portfolio Website",
                excerpt:
                  "Learn how to design a professional portfolio that highlights your expertise and attracts opportunities...",
                author: "Ms. Olivia Parker",
                date: "April 17 2024",
                image: elb4,
              },
              {
                title: "Web Development Trends to Watch",
                excerpt:
                  "Stay ahead of the curve with this guide to the top tools and frameworks for modern web development...",
                author: "Mr. Ethan",
                date: "March 10 2024",
                image: elb5,
              },
              {
                title: "Unlocking Creativity Through Photography",
                excerpt:
                  "Master the fundamentals of composition, lighting, and storytelling for breathtaking images...",
                author: "Ms. Sophia",
                date: "Feb 17 2024",
                image: elb6,
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="bg-emerald-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-400/20 rounded-bl-full" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our News Letter
              </h2>
              <div className="flex gap-2 max-w-md">
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
      </section> */}
    </div>
  );
};

export default BlogPage;
