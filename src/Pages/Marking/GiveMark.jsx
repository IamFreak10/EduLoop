import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SubmisonByIDApi from '../../api/SubmisonByIDApi';
import Reloader from '../Shared/Reloader';

const GiveMark = () => {
  const { id } = useParams();
  const{SubmisonByIDPromise}=SubmisonByIDApi();
  const [submission, setAssignment] = useState({});
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      SubmisonByIDPromise(id).then((res) => setAssignment(res));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);
  if (loading) return <Reloader />;
console.log(submission);
const{submitedByName,submitedByEmail,
docLink,
note,
status

}=submission;
  const handleSubmit = (e) => {
   e.preventDefault();
  const marks=e.target.marks.value;
  const feedback=e.target.feedback.value;
  status="Completed";
  
  };
  return (
    <div className="flex flex-col h-full justify-between bg-white dark:bg-[#213047] shadow-2xl max-w-sm w-full mx-auto rounded-lg overflow-hidden p-5 space-y-4">
      <h2 className="text-xl font-bold text-primary dark:text-white text-center">
        Review Assignment
      </h2>

      {/* Examinee Info */}
      <div className="space-y-1 text-sm">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-green-500">Examinee:</span> {submitedByName}
        </p>
        <p className="text-gray-600 dark:text-gray-400">{submitedByEmail}</p>
      </div>

      {/* Google Docs Link */}
      <a
        href={docLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
      >
        View Google Docs Submission
      </a>

      <form onSubmit={handleSubmit}>
        {/* Note */}
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-700 dark:text-gray-200">
          {note}
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <input
          name='marks'
            type="number"
            placeholder="Enter Marks"
            className="input input-bordered w-full  bg-[#ede7f6] dark:bg-gray-900"
          />
          <textarea
            name='feedback'
            placeholder="Enter Feedback"
            className="textarea textarea-bordered w-full bg-[#ede7f6] dark:bg-gray-900 "
          />
        </div>

        {/* Submit Button */}
        <button

          type='submit'
          className="btn btn-primary dark:btn-accent w-full mt-3"
        >
          Submit Mark
        </button>
      </form>
    </div>
  );
};

export default GiveMark;
