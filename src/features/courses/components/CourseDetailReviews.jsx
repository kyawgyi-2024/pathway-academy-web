
import { Star, Clock, Heart, Search } from "lucide-react";

const CourseDetailReviews = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* <Image
                src="/placeholder.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              /> */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-green-500 px-3 py-2 text-sm font-medium"
                >
                  Courses
                </a>
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-64 pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <button className="text-gray-900 px-4 py-2 text-sm font-medium">
                  Login
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Apply Now
                </button>
              </div>
              {/* Mobile menu button */}
              <button className="sm:hidden p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm">
          <a href="#" className="text-gray-500">
            Courses
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Course detail</span>
        </div>
      </div>

      {/* Course Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              JavaScript for Beginner
            </h1>
            <p className="text-gray-600 mb-6">
              JavaScript is the popular programming language which powers web
              pages and web applications. This course will get you started
              coding in JavaScript.
            </p>
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <span className="flex items-center text-gray-600">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                4.5/5.0
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                2h 30min
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Beginner
              </span>
              <span className="text-gray-600">100 Enrolled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="text-green-500 border-b-2 border-green-500 px-1 py-4 text-sm font-medium">
                  Overview
                </button>
                <button className="text-gray-500 px-1 py-4 text-sm font-medium">
                  Curriculum
                </button>
                <button className="text-gray-500 px-1 py-4 text-sm font-medium">
                  Instructor
                </button>
                <button className="text-gray-500 px-1 py-4 text-sm font-medium">
                  Reviews
                </button>
                <button className="text-gray-500 px-1 py-4 text-sm font-medium">
                  FAQs
                </button>
              </nav>
            </div>

            {/* Reviews Section */}
            <div className="py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our student reviews
              </h2>
              <div className="flex items-center mb-8">
                <div className="mr-8">
                  <div className="text-4xl font-bold text-gray-900">4.5</div>
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current text-gray-300" />
                  </div>
                  <div className="text-sm text-gray-500">
                    (Based on today reviews)
                  </div>
                </div>
                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center mb-2">
                      <div className="w-24 text-sm text-gray-600">
                        {rating} stars
                      </div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-yellow-400 rounded-full"
                          style={{ width: `${rating * 20}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add review form */}
              <div className="mt-8 border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Write a Review
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Rating
                    </label>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          className="text-yellow-400 hover:text-yellow-500"
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">5/5</span>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="review"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your review
                    </label>
                    <textarea
                      id="review"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Post review
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Course Info Sidebar */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold text-gray-900">$18.00</div>
                <Heart className="h-6 w-6 text-gray-400" />
              </div>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
                Apply now
              </button>
              <button className="w-full border border-green-500 text-green-500 px-4 py-2 rounded-lg text-sm font-medium">
                Try for free
              </button>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  This course included
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-24">Lesson</span>
                    <span className="flex-1 text-right">15</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-24">Duration</span>
                    <span className="flex-1 text-right">2h 30min</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-24">Level</span>
                    <span className="flex-1 text-right">Beginner</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-24">Language</span>
                    <span className="flex-1 text-right">English</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-24">Certificate</span>
                    <span className="flex-1 text-right">Yes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Business",
                  "Web development",
                  "Data science",
                  "Machine learning",
                  "Python",
                  "HTML",
                  "CSS",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Join Our News Letter
              </h2>
              <p className="text-green-100">
                Stay updated with our latest news and updates
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-gray-900 text-white px-6 py-2 rounded-r-lg text-sm font-medium">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetailReviews;
