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
        <p className="text-lg text-gray-800 font-semibold">
          Your login credentials are incorrect; please provide the correct credentials.
        </p>

        <Link href="/auth/Signin" className="signup-link">
          <span className="mt-6 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 no-underline rounded-md">
            Go to back to signin
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
