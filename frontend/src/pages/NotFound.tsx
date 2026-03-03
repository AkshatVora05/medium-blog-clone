import { Link, useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
        <div className="flex flex-col justify-center">
            <Appbar authorName="Guest" addBlog={false} />
        </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page not found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/blogs")}
            className="px-5 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Go to Blogs
          </button>

          <Link to="/signin">
            <button className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};