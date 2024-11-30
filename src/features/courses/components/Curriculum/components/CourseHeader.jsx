import React from "react";

const CourseHeader = () => {
  return (
    <div className="bg-emerald-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-2 text-sm">
          <span className="text-gray-500">Courses</span> {" > "} Course detail
        </div>
        <h1 className="mb-4 text-4xl font-bold">JavaScript for Beginner</h1>
        <p className="mb-4 text-gray-600">
          JavaScript is the popular programming language which powers web pages
          and web applications. This course will get you started coding in
          JavaScript.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1">
            <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-sm">
              Beginner
            </span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            1500 Enrolled
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4.5/5.0
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h12M9 3v4M3 9h12M9 7v4M3 13h12M9 11v4" />
            </svg>
            English
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
