import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center p-5 justify-center">
      <div className="px-10 py-20 text-center rounded-lg">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">404</h1>
        <p className="text-2xl mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link className="px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105" href="/">
          Go back home
        </Link>
      </div>
    </div>
  );
}