import React from 'react';

const GiveMark = () => {
  return (
    <div className="flex flex-col h-full justify-between bg-white dark:bg-[#213047] shadow-2xl max-w-sm w-full mx-auto rounded-lg overflow-hidden p-5 space-y-4">
      <h2 className="text-xl font-bold text-primary dark:text-white text-center">
        Review Assignment
      </h2>

      {/* Examinee Info */}
      <div className="space-y-1 text-sm">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-green-500">Examinee:</span> John
          Doe
        </p>
        <p className="text-gray-600 dark:text-gray-400">johndoe@example.com</p>
      </div>

      {/* Google Docs Link */}
      <a
        href="https://docs.google.com/document/d/example"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
      >
        View Google Docs Submission
      </a>

      {/* Note */}
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-700 dark:text-gray-200">
        This is the student’s note about the assignment submission. Well
        explained and detailed.
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <input
          type="number"
          placeholder="Enter Marks"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Enter Feedback"
          className="textarea textarea-bordered w-full"
        />
      </div>

      {/* Submit Button */}
      <button className="btn btn-primary w-full">Submit Mark</button>
    </div>
  );
};

export default GiveMark;
