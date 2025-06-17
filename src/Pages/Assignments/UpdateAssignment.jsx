import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UpdateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [updifficulty, setupDifficulty] = useState('');
  const { user } = UseAuth();
  const [newstartDate, setnewStartDate] = useState(new Date());
  const assignment = useLoaderData();
  const {
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    CreatorInfo,
    _id,
  } = assignment;
  const goback = () => {
    navigate(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add creator info
    data.CreatorInfo = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

   
    const marks = Number(form.marks.value);
    const description = form.description.value;


    if (isNaN(marks)) {
      return Swal.fire({
        title: 'Error!',
        text: 'Marks must be a number.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    if (description.length < 20) {
      return Swal.fire({
        title: 'Error!',
        text: 'Description must be at least 20 characters.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(
            `https://b11a11-server-side-iam-freak10.vercel.app/assignments/${_id}?email=${user.email}`,
            data
          )
          .then(() => {
            Swal.fire('Updated!', '', 'success');
          })
          .then(() => {
            goback();
          })
          .catch((err) => {
            console.error('Update failed:', err);
            Swal.fire('Failed to update', '', 'error');
          });
      } else if (result.isDenied) {
        goback();
      }
    });
  };

  if (user.email === CreatorInfo.email) {
    return (
      <div className="bg-[#FADA7A]/70  dark:bg-[#213047] rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto mt-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold dark:text-white">{user?.displayName}</p>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="title"
            type="text"
            className="input bg-[#ede7f6] w-full"
            defaultValue={title}
          />

          <textarea
            required
            name="description"
            className="textarea bg-[#ede7f6] w-full"
            defaultValue={description}
            required
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              name="marks"
              type="number"
              className="input bg-[#ede7f6] w-full"
              defaultValue={marks}
            />

            <input
              required
              name="thumbnail"
              type="url"
              className="input bg-[#ede7f6] w-full"
              defaultValue={thumbnail}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="difficulty"
              className="select bg-[#ede7f6] w-full"
              defaultValue={difficulty}
              onChange={(e) => setupDifficulty(e.target.value)}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <DatePicker
              required
              selected={newstartDate}
              name="dueDate"
              onChange={(date) => setnewStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="input bg-[#ede7f6] w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning dark:btn-accent w-full"
          >
            Update Assignment
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-red-500">
          You are not allowed to update this assignment!! Only the creator can
          update this assignment
        </h1>
        <button
          onClick={goback}
          className="btn btn-primary dark:btn-accent w-full"
        >
          Go Back
        </button>
      </div>
    );
  }
};

export default UpdateAssignment;
