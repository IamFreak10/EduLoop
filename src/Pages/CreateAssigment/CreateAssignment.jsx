import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
  const [difficulty, setDifficulty] = useState('');
  const { user } = UseAuth();
  const [startDate, setStartDate] = useState(new Date());

  const handleSUbmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.CreatorInfo = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
    axios
      .post('http://localhost:3000/assignments', data)
      .then(() => {
        // // form.reset();
        // Swal.fire({
        //   title: 'Successfully Added!',
        //   icon: 'success',
        //   draggable: true,
        // });
      })
      .catch(() => {});
  };
  return (
    <div className="card dark:bg-[#213047] mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSUbmit}>
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold text-center mb-4">
              Create Assignment
            </h1>
            <label className="label">Title</label>
            <input
              name="title"
              type="text"
              className="input bg-[#ede7f6]"
              placeholder="Assignment Title"
              required
            />
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea bg-[#ede7f6]"
              placeholder="Write a short description"
              required
            ></textarea>
            <label className="label">Marks</label>
            <input
              name="marks"
              type="number"
              className="input bg-[#ede7f6]"
              placeholder="Total Marks"
              required
            />
            <label className="label">Thumbnail Image URL</label>
            <input
              name="thumbnail"
              type="url"
              className="input bg-[#ede7f6]"
              placeholder="https://example.com/image.jpg"
              required
            />
            <label className="label">Difficulty Level</label>
            <select
              name="difficulty"
              className="select bg-[#ede7f6]"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label className="label text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <DatePicker
              selected={startDate}
              name="dueDate"
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              className="input input-bordered w-full max-w-xs"
            />

            <button
              type="submit"
              className="btn btn-primary dark:btn-accent mt-6 w-full"
            >
              Create Assignment
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
