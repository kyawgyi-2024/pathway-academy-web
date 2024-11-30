import React from "react";

const PopularTag = () => {
  const tags = [
    "Business",
    "Web development",
    "Data science",
    "Machine learning",
    "Python",
    "Html",
    "CSS",
  ];
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
