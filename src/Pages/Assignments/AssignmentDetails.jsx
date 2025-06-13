import React from 'react';
import { useLoaderData } from 'react-router';

const AssignmentDetails = () => {
  const assignment = useLoaderData(); // fetched via route loader

  const {
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    CreatorInfo,
  } = assignment;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg space-y-6">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
        <p>
          <span className="text-green-600 dark:text-green-400">Marks:</span> {marks}
        </p>
        <p>
          <span className="text-yellow-600 dark:text-yellow-400">Difficulty:</span> {difficulty}
        </p>
        <p>
          <span className="text-blue-600 dark:text-blue-400">Due Date:</span> {dueDate}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={CreatorInfo.photo}
          alt={CreatorInfo.name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">{CreatorInfo.name}</p>
          <p className="text-sm text-gray-500">{CreatorInfo.email}</p>
        </div>
      </div>

      <div className="pt-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          Take Assignment
        </button>
      </div>
    </div>
  );
};

export default AssignmentDetails;
