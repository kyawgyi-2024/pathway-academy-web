import { Button } from "@/components/ui/button";

const Curriculum = () => {
  const sections = [
    {
      title: "JavaScript Basics",
      lessons: [
        {
          title: "Intro to JavaScript: Overview, setup, and running code",
          duration: "30min",
        },
        {
          title:
            "Variables and Data Types: let, const, strings, numbers, booleans",
          duration: "1hr",
        },
        { title: "Loops: for, while, and do..while loops", duration: "45min" },
      ],
    },
    {
      title: "Functions and Scope",
      lessons: 3,
    },
    {
      title: "Arrays and Objects",
      lessons: 3,
    },
    {
      title: "The Document Object Model (DOM)",
      lessons: 3,
    },
  ];

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg border">
          <div className="flex items-center justify-between p-4">
            <h3 className="font-medium">{section.title}</h3>
            {typeof section.lessons === "number" ? (
              <span className="text-sm text-gray-500">
                {section.lessons} lessons
              </span>
            ) : null}
          </div>
          {Array.isArray(section.lessons) && (
            <div className="border-t">
              {section.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lessonIndex}
                  className="flex items-center justify-between border-b last:border-b-0 p-4"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{lesson.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {lesson.duration}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
