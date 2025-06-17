import React, {  useEffect, useState } from 'react';
import MyattemptAssignmentApi from '../../api/MyattemptAssignmentApi';
import UseAuth from '../../Hooks/UseAuth';
import Reloader from '../Shared/Reloader';
import MyAttemtAssignmenCard from './MyAttemtAssignmenCard';

const MyAttemptAssignments = () => {
  const { myAttemptAssignmenPromise } = MyattemptAssignmentApi();
  const{user}=UseAuth();
  const [assignmentsData, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      myAttemptAssignmenPromise(user.email)
        .then((res) => setAssignments(res))
        .then(setLoading(false));
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  if (loading) return <Reloader />;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>
      {
        assignmentsData.map(assignment => (
          <MyAttemtAssignmenCard key={assignment._id} assignment={assignment} />
        ))
      }
    </div>
  );
};

export default MyAttemptAssignments;
