import { Link } from "react-router-dom";

const Err = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Err;
