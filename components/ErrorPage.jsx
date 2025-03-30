import React from "react";

const ErrorPage = () => {
  return (
    <div className="px-4 bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for is unavailable.
        </p>
        <a
          href="/"
          className="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
