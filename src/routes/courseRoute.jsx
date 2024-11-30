import { lazy } from "react";

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
const CurriculumDetailPage = lazy(() =>
  import("../features/courses/components/Curriculum/pages/CurriculumDetailPage")
);

const courseRoute = [
  
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
  {
    path: "course-detail-page",
    element: <CurriculumDetailPage />,
  },
];

export default courseRoute;
