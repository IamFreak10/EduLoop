import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router'; // FIX: use 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth';

const AssignmentCard = ({ assignment }) => {
  const navigate = useNavigate();
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
  const { user } = UseAuth();

  const handleDelete = (id) => {
    if (!user) {
      Swal.fire({
        title: 'Error!',
        text: 'You are not evenet logged in,only logged in Users Can process such actions.Login To Conitue',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/signIn');
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this assignment!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          if (user.email === CreatorInfo.email) {
            axios
              .delete(`http://localhost:3000/assignments/${id}`)
              .then(() => {
                Swal.fire(
                  'Deleted!',
                  'The assignment has been deleted.',
                  'success'
                );
              })
              .then(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not allowed to delete this assignment!',
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'The assignment is safe :)', 'info');
        }
      });
    }
  };

  return (
    <div className="flex flex-col h-full justify-between bg-white min-h-[450px] dark:bg-[#213047] shadow-2xl max-w-sm w-full mx-auto rounded-lg overflow-hidden hover:shadow hover:scale-110 transition-all duration-1000">
      <figure className="px-4 pt-4">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="min-h-[100px]">
          <h2 className="card-title text-2xl font-bold text-primary dark:text-white">
            {title}
          </h2>
        </div>

        <div className="mt-4 space-y-1 text-sm ">
          <p>
            <span className="font-semibold text-green-500">Marks:</span> {marks}
          </p>
          <p>
            <span className="font-semibold text-yellow-500">Difficulty:</span>{' '}
            {difficulty}
          </p>
          <p>
            <span className="font-semibold text-blue-400">Due:</span> {dueDate}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={CreatorInfo?.photo}
            alt={CreatorInfo?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-bold text-sm dark:text-white">
              {CreatorInfo?.name}
            </p>
            <p className="text-xs text-gray-400">{CreatorInfo?.email}</p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between ">
            <Link to={`/assignments/${_id}`}>
              <button className="btn btn-sm btn-info text-white flex items-center gap-2">
                <FaEye className="text-base" /> View
              </button>
            </Link>
            <Link to={`/assignments/${_id}/edit`}>
              <button className="btn btn-sm btn-warning text-white flex items-center gap-2">
                <FaEdit className="text-base" /> Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error text-white flex items-center gap-2"
            >
              <FaTrash className="text-base" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
