import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; 
import AssignmentCard from './AssignmentCard';
import Reloader from '../Shared/Reloader';

const Assignments = () => {
  const assignmentsData = useLoaderData();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setAssignments(assignmentsData);
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(delay); 
  }, [assignmentsData]);

  if (loading) return <Reloader />; 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>
      {assignments.map(assignment => (
        <AssignmentCard key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default Assignments;
