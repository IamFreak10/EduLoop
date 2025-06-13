import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/signIn/signIn';
import PrivateRoute from '../Routes/PrivateRoute';
import Assignments from '../Pages/Assignments/Assignments';
import PendingAssignments from '../Pages/PendingAssigments/PendingAssignments';
import CreateAssignment from '../Pages/CreateAssigment/CreateAssignment';
import MyAttemptAssignments from '../Pages/MyAttemptAssignments/MyAttemptAssignments';
import AssignmentDetails from '../Pages/Assignments/AssignmentDetails';
import UpdateAssignment from '../Pages/Assignments/UpdateAssignment';
import SubmitAssignment from '../Pages/Assignments/SubmitAssignment';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'assigments',
        Component: Assignments,
        loader: () => fetch('http://localhost:3000/assignments'),
      },
      {
        path: 'CreateAssignment',
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: 'MyAttemptAssignments',
        element: (
          <PrivateRoute>
            <MyAttemptAssignments></MyAttemptAssignments>
          </PrivateRoute>
        ),
      },

      {
        path: 'PendingAssignments',
        element: (
          <PrivateRoute>
            <PendingAssignments></PendingAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: 'assignments/:id',
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
      },
      {
        path: 'assignments/:id/edit',
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
      },
      {
        path: 'assignmentsubmisson/:id',
        element: (
          <PrivateRoute>
          <SubmitAssignment></SubmitAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
      },

      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'signIn',
        Component: SignIn,
      },
    ],
  },
]);

export default router;
