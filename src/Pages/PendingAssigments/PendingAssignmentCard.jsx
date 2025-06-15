import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const PendingAssignmentCard = ({ assignment }) => {
  // Example data
  console.log(assignment);
  const {_id ,marks, submitedByName, submitedByPhoto, title, submitedByEmail } =
    assignment;
  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div className="bg-white dark:bg-[#213047] rounded-2xl shadow-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 p-5 max-w-sm mx-auto" >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={submitedByPhoto}
            alt="Submitter"
            className="w-14 h-14 rounded-full border-2 border-primary"
          />
          <div>
            <h2 className="text-xl font-bold dark:text-white">
              {submitedByName}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email: {submitedByEmail}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-gray-700 dark:text-gray-300 min-h-[100px]">
          <p className="flex items-center gap-2">
            <MdAssignment className="text-xl" />
            Title:
          {title}
          </p>
          <p className="flex items-center gap-2">
            <FaUserGraduate className="text-lg" />
            <span className="font-medium">Marks:</span>{' '}
            <span className="font-bold">{marks}</span>
          </p>
        </div>

        <Link to={`/give-mark/${_id}`}>
          <button className="mt-5 w-full btn btn-primary dark:btn-accent text-white">
            Give Mark
          </button>
        </Link>
      </div>
    </Fade>
  );
};

export default PendingAssignmentCard;
