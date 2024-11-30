import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import error from "../assets/404 error.svg";
import { LucideArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="h-96 w-96 bg-emerald-50 rounded-full"></div> */}
            </div>
            <div className="relative">
              {/* <h1 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-9xl">
                <span className="block text-2xl mb-4">OOPS!</span>
                404
              </h1> */}

              <img
                src={error}
                alt="404 illustration"
                className="mx-auto h-80"
              />
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
            Something's wrong here...
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We can't find the page you're looking for. Check out our help center
            or head back to home.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button className="bg-black text-white" variant="secondary">
              Help Center <LucideArrowRight />{" "}
            </Button>
            <Link to={"/"}>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default NotFound;
