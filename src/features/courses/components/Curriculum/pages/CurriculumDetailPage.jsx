import NavHeader from "../../Curriculum/components/NavHeader";
import CourseHeader from "../../Curriculum/components/CourseHeader";
import Curriculum from "../../Curriculum/components/Curriculum";
import CourseInfo from "../../Curriculum/components/CourseInfo";
import PopularTags from "../../Curriculum/components/PopularTag";
import CourseCard from "../../Curriculum/components/CourseCard";
import Newsletter from "../../Curriculum/components/PopularTag";

const CurriculumDetailPage = () => {
  const topCourses = [
    {
      title: "Essential video editing techniques",
      image: "/placeholder.svg?height=225&width=400",
      price: "12.00",
      instructor: {
        name: "Ms.Ella",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      stats: {
        lessons: 18,
        duration: "2hr 30min",
        rating: "4.5/5.0",
        students: 4500,
      },
      tag: "Video editing",
    },
    {
      title: "Fundamental of business strategy",
      image: "/placeholder.svg?height=225&width=400",
      price: "Free",
      instructor: {
        name: "Olivia",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      stats: {
        lessons: 20,
        duration: "2hr 30min",
        rating: "4.5/5.0",
        students: 4000,
      },
      tag: "Business",
    },
    {
      title: "Content writing essential",
      image: "/placeholder.svg?height=225&width=400",
      price: "15.00",
      instructor: {
        name: "Lucy",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      stats: {
        lessons: 15,
        duration: "2hr 30min",
        rating: "4.0/5.0",
        students: 4500,
      },
      tag: "Content writing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <CourseHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex gap-4 border-b">
                <button className="border-b-2 border-emerald-500 pb-2 font-medium text-emerald-500">
                  Overview
                </button>
                <button className="pb-2 font-medium text-gray-500 hover:text-gray-700">
                  Curriculum
                </button>
                <button className="pb-2 font-medium text-gray-500 hover:text-gray-700">
                  Instructor
                </button>
                <button className="pb-2 font-medium text-gray-500 hover:text-gray-700">
                  Reviews
                </button>
                <button className="pb-2 font-medium text-gray-500 hover:text-gray-700">
                  FAQs
                </button>
              </div>
              <Curriculum />
            </div>
          </div>
          <div className="space-y-8">
            <CourseInfo />
            <PopularTags />
          </div>
        </div>
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold">Top listed courses</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </main>
      <Newsletter />
    </div>
  );
};

export default CurriculumDetailPage;
