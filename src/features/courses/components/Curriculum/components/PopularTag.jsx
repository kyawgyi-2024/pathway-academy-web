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
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
