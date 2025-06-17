import React from 'react';
import { Link } from 'react-router';
import { XCircle } from 'lucide-react';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      {' '}
      <div className="text-center bg-[#FADA7A] dark:bg-gray-800 p-10 rounded-2xl shadow-xl max-w-lg w-full">
        {' '}
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?semt=ais_hybrid&w=740"
          alt="404 error"
          className="mx-auto mb-4"
        />{' '}
        <XCircle size={64} className="text-red-500 mx-auto mb-4" />{' '}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>{' '}
        <p className="text-lg text-gray-600 dark:text-accent mb-6">
          Something went wrong or the page you're looking for doesn't exist.{' '}
        </p>{' '}
        <Link
          to="/"
          className="inline-block bg-amber-500 dark:bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-900 transition duration-200"
        >
          Go Back Home{' '}
        </Link>{' '}
      </div>{' '}
    </div>
  );
};

export default Error;
