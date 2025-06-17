import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SubmisonByIDApi from '../../api/SubmisonByIDApi';
import Reloader from '../Shared/Reloader';
import Swal from 'sweetalert2';
import PatchSubmisonByID from '../../api/PatchSubmisonByID';
import UseAuth from '../../Hooks/UseAuth';

const GiveMark = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {user}=UseAuth();
  const { updateSubmissionPromise }=PatchSubmisonByID();
  
  const { SubmisonByIDPromise } = SubmisonByIDApi();
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
  const { submitedByName, submitedByEmail, docLink, note} = submission;
  const handleSubmit = (e) => {
    e.preventDefault();
    const Obtainedmarks = e.target.marks.value;
    const feedback = e.target.feedback.value;

    const data = { Obtainedmarks, feedback, status: 'Completed' };
    Swal.fire({
      title: 'Do you want to Give Mark and Feedback?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateSubmissionPromise(id, data).then(() => {
          Swal.fire('Saved!', '', 'success');
        }).then(() => {
          navigate('/PendingAssignments');
        })
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };
 if(user.email===submitedByEmail){
  return(
    <div className="flex flex-col h-full justify-center items-center bg-white dark:bg-[#213047] shadow-2xl max-w-sm w-full mx-auto rounded-lg overflow-hidden p-5 space-y-4">
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 text-center">
        Warning: You Can't Mark Your Own Submission!
      </h2>
      <button onClick={() => navigate('/PendingAssignments')} className="btn btn-primary mt-4">
        Go Back
      </button>
    </div>
  )
}else{
   return (
    <div className="flex flex-col h-full justify-between bg-white dark:bg-[#213047] shadow-2xl max-w-sm w-full mx-auto rounded-lg overflow-hidden p-5 space-y-4">
      <h2 className="text-xl font-bold text-primary dark:text-white text-center">
        Review Assignment
      </h2>

      {/* Examinee Info */}
      <div className="space-y-1 text-sm">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-green-500">Examinee:</span>{' '}
          {submitedByName}
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
            name="marks"
            type="number"
            placeholder="Enter Marks"
            className="input input-bordered w-full  bg-[#ede7f6] dark:bg-gray-900"
          />
          <textarea
            name="feedback"
            placeholder="Enter Feedback"
            className="textarea textarea-bordered w-full bg-[#ede7f6] dark:bg-gray-900 "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary dark:btn-accent w-full mt-3"
        >
          Submit Mark
        </button>
      </form>
    </div>
  );
}
 
};

export default GiveMark;
