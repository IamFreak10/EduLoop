import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const CreateAssignment = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('');
  const { user } = UseAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

   
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
        text: 'Marks must be a valid number.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    if (description.length < 20) {
      return Swal.fire({
        title: 'Error!',
        text: 'Description must be at least 20 characters long.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

   
    Swal.fire({
      title: 'Do you want to create an assignment?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post(
            'https://b11a11-server-side-iam-freak10.vercel.app/assignments',
            data
          )
          .then(() => {
            Swal.fire('Saved!', '', 'success');
          })
          .then(() => {
            form.reset();
            navigate('/assigments'); 
          })
          .catch((err) => {
            console.error('Assignment creation failed:', err);
            Swal.fire('Failed to create assignment', '', 'error');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  return (
    <div className="bg-[#FFF0BD]  dark:bg-[#213047] rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto mt-10">
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
          name="title"
          type="text"
          className="input bg-[#ede7f6] w-full"
          placeholder="What's the assignment title?"
          required
        />

        <textarea
          name="description"
          className="textarea bg-[#ede7f6] w-full"
          placeholder="Write a short description..."
          required
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="marks"
            type="number"
            className="input bg-[#ede7f6] w-full"
            placeholder="Total Marks"
            required
          />

          <input
            name="thumbnail"
            type="url"
            className="input bg-[#ede7f6] w-full"
            placeholder="Image URL"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="difficulty"
            className="select bg-[#ede7f6] w-full"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <DatePicker
            selected={startDate}
            name="dueDate"
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            className="input bg-[#ede7f6] w-full"
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning dark:btn-accent w-full"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
