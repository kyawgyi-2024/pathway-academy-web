import { Button } from "@/components/ui/button";


const CourseCard = ({ title, image, price, instructor, stats, tag }) => {
  return (
    <div className="group relative rounded-lg border">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        {/* <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover transition-transform group-hover:scale-105"
        /> */}
        {tag && (
          <span className="absolute left-2 top-2 rounded bg-emerald-500 px-2 py-1 text-xs text-white">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Image
              src={instructor.avatar}
              alt={instructor.name}
              width={32}
              height={32}
              className="rounded-full"
            /> */}
            <span className="text-sm">{instructor.name}</span>
          </div>
          <span className="font-semibold text-emerald-500">
            {typeof price === "string" ? price : `$${price.toFixed(2)}`}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {stats.lessons} Lesson
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
            {stats.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {stats.rating}
          </span>
          <span>({stats.students} Students)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
