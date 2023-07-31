// pages/404.js

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-400">PassGrades</h1>
        <p className="text-lg text-gray-800 mt-4">
          Oops! Something went wrong.
        </p>
        <p className="text-lg text-gray-800">
          We couldn't find the page you're looking for.
        </p>
        <p className="text-lg text-gray-800">
          Please check the URL or go back to the homepage.
        </p>
        <Link href="/auth/Signin">
          <span className="mt-6 block px-4 py-2 text-sm font-medium text-white bg-blue-400 no-underline rounded-md hover:bg-red-700">
            Go to back to signin
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
