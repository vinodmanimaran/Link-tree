import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <Link href="/" className="text-xl underline">
  Go back to the home page
      </Link>
      <div className="mt-8">
        <img
          src="/404.aviff" 
          alt="Not found"
          className="w-64"
        />
      </div>
    </div>
  );
};

export default Custom404;
