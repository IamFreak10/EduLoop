import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
  const [difficulty, setDifficulty] = useState('');
  const { user } = UseAuth();
  const [startDate, setStartDate] = useState(new Date());

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

    axios
      .post('http://localhost:3000/assignments', data)
      .then(() => {
        // Success logic
      })
      .catch(() => {
        // Error logic
      });
  };

  return (
   <div className="bg-white dark:bg-[#213047] rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto mt-10">
  {/* Examinee Info */}
  <div className="flex items-center gap-4 mb-4">
    <img
      src="https://i.pravatar.cc/100?img=3" // Example image
      alt="John Doe"
      className="w-12 h-12 rounded-full border"
    />
    <div>
      <p className="font-semibold dark:text-white">John Doe</p>
      <p className="text-sm text-gray-400">johndoe@example.com</p>
    </div>
  </div>

  {/* Assignment Title and Docs Link */}
  <div className="mb-4 space-y-2">
    <p className="text-lg font-bold dark:text-white">
      Assignment Title: <span className="text-primary">React Basics</span>
    </p>
    <a
      href="https://docs.google.com/document/d/example"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 text-sm"
    >
      Open Google Docs Submission
    </a>
  </div>

  {/* Notes */}
  <div className="bg-[#ede7f6] p-3 rounded text-sm text-gray-700 dark:text-gray-200 mb-4">
    This is a note explaining the approach and logic used in the assignment submission.
  </div>

  {/* Marking Form */}
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="marks"
        type="number"
        className="input bg-[#ede7f6] w-full"
        placeholder="Enter Marks"
        required
      />
      <input
        name="feedback"
        type="text"
        className="input bg-[#ede7f6] w-full"
        placeholder="Write Feedback"
        required
      />
    </div>

    <button
      type="submit"
      className="btn btn-primary dark:btn-accent w-full"
    >
      Submit Mark
    </button>
  </form>
</div>

  );
};

export default CreateAssignment;
