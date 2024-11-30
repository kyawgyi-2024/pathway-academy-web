import React from "react";

const CourseNav = () => {
  return (
    <nav className="flex gap-8 border-gray-200 mb-8">
      <button className="text-emerald-500 px-4 py-2">Overview</button>
      <button className="bg-emerald-500 text-white rounded-md px-4 py-2">
        Curriculum
      </button>
      <button className="text-gray-600 px-4 py-2">Instructor</button>
      <button className="text-gray-600 px-4 py-2">Reviews</button>
      <button className="text-gray-600 px-4 py-2">FAQs</button>
    </nav>
  );
};

export default CourseNav;
