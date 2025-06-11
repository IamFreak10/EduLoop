import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusUpdate = (e, applicationId) => {
    axios
      .patch(
        `https://career-code-server-silk.vercel.app/applications/${applicationId}`,
        {
          status: e.target.value,
        }
      )
      .then(
        Swal.fire({
          title: 'Successfully Updated!',
          icon: 'success',
          draggable: true,
        })
      )
      .catch((err) => console.error(err));
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications?.map((application, index) => (
            <tr className="bg-base-200">
              <th>{index + 1}</th>
              <td>{application.applicant}</td>
              <td>Quality Control Specialist</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, application._id)}
                  defaultValue={application?.status}
                  className="select"
                >
                  <option disabled={true}>Update Status</option>
                  <option>Under Review</option>
                  <option>Call For Interview</option>
                  <option>Selected</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
