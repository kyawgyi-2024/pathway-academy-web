import { Heart } from "lucide-react";
import  CourseNav  from "../../../features/courses/components/Curriculum/CourseNav";
import  CourseSection  from "../../../features/courses/components/Curriculum/CourseSection";
import CourseInfo  from "../../../features/courses/components/Curriculum/CurriculumInfo";
import  PopularTags  from "../../../features/courses/components/Curriculum/PopularTag";

const CurriculumPage = () => {
  const jsBasicsLessons = [
    {
      title: "Intro to JavaScript: Overview, setup, and running code.",
      duration: "30min 10sec",
    },
    {
      title:
        "Variables and Data Types: let, const, strings, numbers, booleans.",
      duration: "1hr 10sec",
    },
    {
      title: "Loops: for, while, and do_while loops.s",
      duration: "15min 4sec",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CourseNav />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <CourseSection
            title="JavaScript Basics"
            lessonsCount={3}
            lessons={jsBasicsLessons}
          />
          <CourseSection title="Functions and Scope" lessonsCount={3} />
          <CourseSection title="Arrays and Objects" lessonsCount={3} />
          <CourseSection
            title="The Document Object Model (DOM)"
            lessonsCount={3}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-3xl font-bold text-emerald-500">
                  $18.00
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  $20.00
                </span>
              </div>
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
                10% off
              </span>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors">
                Try for free
              </button>
              <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                Apply now
              </button>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700">
              <Heart className="h-5 w-5" />
              <span>Add to wishlist</span>
            </button>
          </div>

          <CourseInfo
            lessons={18}
            duration="2hr 30min"
            level="Beginner"
            language="English"
            certificate="Yes"
          />

          <PopularTags />
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
