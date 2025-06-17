import React, { use, useEffect, useState } from 'react';
import PendingStausApi from '../../api/PendingStausApi';
import Reloader from '../Shared/Reloader';
import PendingAssignmentCard from './PendingAssignmentCard';
import { NavLink } from 'react-router';

const PendingAssignments = () => {
  const { PendingAssignmentsPromise } = PendingStausApi();
  const [loading, setLoading] = useState(true);
  const [PendingAssignments, setPendingAssignments] = useState([]);
  useEffect(() => {
    const delay = setTimeout(() => {
      PendingAssignmentsPromise().then((res) => setPendingAssignments(res));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  if (loading) return <Reloader />;
   if (PendingAssignments.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center mb-9">
         No Pending Assignment!!
        </h1>
          <span className="text-sm text-amber-600 mb-5">
          NB:Wait A few Seconds..!!If You Dont Get Data Loaded.If You Still Don't....
        </span>
        <NavLink
          to='/assigments'
          className="px-6 py-3 rounded-md bg-warning text-white font-semibold hover:bg-primary/90 transition duration-300"
        >
          Go to Assignments To Add More
        </NavLink>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>
      {
        PendingAssignments.map(assignment => (
          <PendingAssignmentCard key={assignment._id} assignment={assignment} />
        ))
      }
    </div>
  );
};

export default PendingAssignments;
