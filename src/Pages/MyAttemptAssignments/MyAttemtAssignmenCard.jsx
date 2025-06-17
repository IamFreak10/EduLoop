import React from "react";
import { MdAssignment } from "react-icons/md";
import {
  FaClipboardCheck,
  FaRegStar,
  FaUserGraduate,
  FaCommentDots,
} from "react-icons/fa";

const MyAttemptAssignmentCard = ({ assignment }) => {
  const { title, status, marks, Obtainedmarks, feedback } = assignment;

  return (
    <div className="backdrop-blur-sm bg-white/70 dark:bg-[#1f2937]/60 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 max-w-sm mx-auto ">
      <div className="space-y-4 text-gray-900 dark:text-gray-100 font-inter">

        {/* Title */}
           <div className="card-body">
        <div className="min-h-[100px]">
          <h2 className="card-title text-2xl font-bold text-primary dark:text-white">
            {title}
          </h2>
        </div>
      </div>
      

        {/* Status */}
        <div className="flex items-center gap-3 text-lg">
          <FaClipboardCheck className="text-xl text-emerald-500" />
          <span className="font-medium text-gray-600 dark:text-gray-300">Status:</span>
          <span
            className={`px-3 py-1 text-sm rounded-full font-semibold shadow-sm ${
              status === "Completed"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-white"
                : "bg-amber-100 text-amber-700 dark:bg-amber-600 dark:text-white"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Total Marks */}
        <div className="flex items-center gap-3 text-lg">
          <FaRegStar className="text-xl text-yellow-400" />
          <span className="font-medium text-gray-600 dark:text-gray-300">Total Marks:</span>
          <span className="font-bold text-yellow-700 dark:text-yellow-300">{marks}</span>
        </div>

        {/* Obtained Marks */}
        {Obtainedmarks && (
          <div className="flex items-center gap-3 text-lg">
            <FaUserGraduate className="text-xl text-purple-500" />
            <span className="font-medium text-gray-600 dark:text-gray-300">Your Marks:</span>
            <span className="font-bold text-purple-700 dark:text-purple-300">{Obtainedmarks}</span>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className="flex items-start gap-3 text-lg">
            <FaCommentDots className="text-xl text-pink-500 mt-1" />
            <span className="font-medium text-gray-600 dark:text-gray-300">Feedback:</span>
            <span className="italic text-sm bg-pink-50 dark:bg-pink-900/30 px-3 py-1 rounded-xl text-pink-700 dark:text-pink-200 shadow-inner">
              “{feedback}”
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAttemptAssignmentCard;
