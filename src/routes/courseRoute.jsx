import { lazy } from "react";

const CoursePage = lazy(() => import("../features/courses/pages/CoursePage"));
const CourseDetailOverview = lazy(() =>
  import("../features/courses/components/CourseDetailOverview")
);
const CourseDetailInstructor = lazy(() =>
  import("../features/courses/components/CourseDetailInstructor")
);
const CourseDetailReviews = lazy(() =>
  import("../features/courses/components/CourseDetailReviews")
);
const CourseDetailFaq = lazy(() =>
  import("../features/courses/components/CourseDetailFaq")
);
const CourseDetailCurriculum = lazy(() =>
  import("../features/courses/components/CourseDetailCurriculum")
);

const courseRoute = [
  {
    path: "course",
    element: <CoursePage />,
  },
  {
    path: "course-detailoverview",
    element: <CourseDetailOverview />,
  },
  {
    path: "course-detailinstructor",
    element: <CourseDetailInstructor />,
  },
  {
    path: "course-detailfaq",
    element: <CourseDetailFaq />,
  },
  {
    path: "course-detailreviews",
    element: <CourseDetailReviews />,
  },
  {
    path: "course-detailcurriculum",
    element: <CourseDetailCurriculum />,
  },
];

export default courseRoute;
