
import UseAuth from '../../Hooks/UseAuth';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import { Fade } from 'react-awesome-reveal';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SubmitAssignment = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const { _id } = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const docLink = form.docLink.value;
    const note = form.note.value;
    const submisson = {
      assignmentID: _id,
      docLink,
      note,
      submitedByName: user.displayName,
      submitedByEmail: user.email,
      submitedByPhoto: user.photoURL,
      status: 'Pending',
    };
    Swal.fire({
      title: 'Do you want to submit the assignment?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't submit`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post('http://localhost:3000/submissions', submisson)
          .then(() => {
            Swal.fire('Submitted!', '', 'success');
            form.reset();
            navigate('/MyAttemptAssignments');
          })
          .catch((error) => {
            Swal.fire('Error!', 'Submission failed.', 'error');
            console.error(error);
          });
      } else if (result.isDismissed) {
        Swal.fire('Submission cancelled', '', 'info');
      }
    });
  };

  return (
    <Fade triggerOnce={true} direction="up" duration={1000}>
      <div className="bg-white dark:bg-[#213047] rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto mt-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold dark:text-white">{user.displayName}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
            name="docLink"
            className="input bg-[#ede7f6] w-full"
            placeholder="Google Docs Link"
            required
          />

          <textarea
            required
            name="note"
            className="textarea bg-[#ede7f6] w-full"
            placeholder="Quick Note (Optional)"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary dark:btn-accent w-full"
          >
            Submit Assignment
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default SubmitAssignment;
