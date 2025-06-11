import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="flex flex-col items-center gap-4">
        <FaSpinner className="text-primary text-5xl animate-spin" />
        <span className="loading loading-dots loading-md text-primary">
          Loading
        </span>
      </div>
    </div>
  );
};

export default Loader;
