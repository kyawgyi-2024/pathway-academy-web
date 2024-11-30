import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useState } from "react";

const CourseSection = ({ title, lessonsCount, lessons }) => {
  const [isExpanded, setIsExpanded] = useState(title === "JavaScript Basics");

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{lessonsCount} lessons</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isExpanded && lessons && (
        <div className="px-4 pb-4">
          {lessons.map((lesson, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4 text-blue-100 bg-blue-500 rounded-full p-1" />
                <span className="text-sm text-gray-700">{lesson.title}</span>
              </div>
              <span className="text-sm text-gray-500">{lesson.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSection;
