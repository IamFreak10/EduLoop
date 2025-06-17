import React, { use, useEffect, useState } from 'react';
import Assignments from '../Pages/Assignments/Assignments';
import axios from 'axios';
import { set } from 'date-fns';

const AssignmentLayout = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios
      .get('https://b11a11-server-side-iam-freak10.vercel.app/assignments')
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  }, []);
  const handleDifficultyChange = (e) => {
    setDifficultyFilter(e.target.value);

    axios
      .get(
        `https://b11a11-server-side-iam-freak10.vercel.app/assignments?difficulty=${e.target.value}`
      )
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  };

  return (
    <>
      <div className="mb-6 flex justify-center mx-auto max-w-xl ">
        <select
          value={difficultyFilter}
          onChange={handleDifficultyChange}
          className="select select-bordered w-full max-w-xs bg-amber-400 dark:bg-accent"
        >
          <option className="bg-amber-400 max-w-xs dark:bg-accent " value="">
            All Difficulty Levels
          </option>
          <option className="bg-amber-400 max-w-xs dark:bg-accent " value="easy">
            Easy
          </option>
          <option className="bg-amber-400 max-w-xs  dark:bg-accent" value="medium">
            Medium
          </option>
          <option className="bg-amber-400 max-w-xs  dark:bg-accent" value="hard">
            Hard
          </option>
        </select>
      </div>
      <Assignments assignments={assignments}></Assignments>
    </>
  );
};

export default AssignmentLayout;
