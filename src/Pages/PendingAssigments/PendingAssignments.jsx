import React, { use, useEffect, useState } from 'react';
import PendingStausApi from '../../api/PendingStausApi';
import Reloader from '../Shared/Reloader';
import PendingAssignmentCard from './PendingAssignmentCard';

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
