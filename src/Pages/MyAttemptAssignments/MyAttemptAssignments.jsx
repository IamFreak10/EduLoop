import React, { useEffect, useState } from 'react';
import MyattemptAssignmentApi from '../../api/MyattemptAssignmentApi';
import UseAuth from '../../Hooks/UseAuth';
import Reloader from '../Shared/Reloader';
import MyAttemtAssignmenCard from './MyAttemtAssignmenCard';
import { div } from 'motion/react-client';
import { Nav } from 'rsuite';
import { NavLink } from 'react-router';

const MyAttemptAssignments = () => {
  const { myAttemptAssignmenPromise } = MyattemptAssignmentApi();
  const { user } = UseAuth();
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
  if (assignmentsData.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center mb-9">
          You Haven't Attempted Any Assignment!!
        </h1>
        <NavLink
          to='/assigments'
          className="px-6 py-3 rounded-md bg-warning text-white font-semibold hover:bg-primary/90 transition duration-300"
        >
          Go to Assignments, To Attempt Any...
        </NavLink>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
      {assignmentsData.map((assignment) => (
        <MyAttemtAssignmenCard key={assignment._id} assignment={assignment} />
      ))}
    </div>
  );
};

export default MyAttemptAssignments;
