import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";

const SignInPage = lazy(() => import("../features/auth/pages/SignInPage"));
const ApplyFormPage = lazy(() => import("../features/auth/pages/ApplyFormPage"));
const ThankYouFormPage = lazy(() => import("../features/auth/pages/ThankYouFormPage"));


const authRoute = [
  {
    path: "signin",
    element: (
      <Suspense fallback={<PageLoading />}>
        <SignInPage />
      </Suspense>
    ),
  },
  {
    path: "apply-form",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ApplyFormPage />
      </Suspense>
    ),
  },
  {
    path: "thankform",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ThankYouFormPage />
      </Suspense>
    ),
  },
];

export default authRoute;
