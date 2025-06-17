import React, { use, useEffect, useState } from 'react';
import Assignments from '../Pages/Assignments/Assignments';
import axios from 'axios';
import { set } from 'date-fns';

const AssignmentLayout = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/assignments')
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
      .get(`http://localhost:3000/assignments?difficulty=${e.target.value}`)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  };

  return (
    <>
      <div className="mb-6 flex justify-center max-w-xl ">
        <select
          value={difficultyFilter}
          onChange={handleDifficultyChange}
          className="select select-bordered w-full max-w-xs bg-amber-400"
        >
          <option className="bg-amber-400 max-w-xs " value="">
            All Difficulty Levels
          </option>
          <option className="bg-amber-400 max-w-xs " value="easy">
            Easy
          </option>
          <option className="bg-amber-400 max-w-xs " value="medium">
            Medium
          </option>
          <option className="bg-amber-400 max-w-xs " value="hard">
            Hard
          </option>
        </select>
      </div>
      <Assignments assignments={assignments}></Assignments>
    </>
  );
};

export default AssignmentLayout;
