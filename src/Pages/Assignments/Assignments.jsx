import { useEffect, useState } from "react";
import Reloader from "../Shared/Reloader";
import AssignmentCard from "./AssignmentCard";
import { Fade } from "react-awesome-reveal";

const Assignments = ({ assignments }) => {
  const [assignmentsD, setAssignmentsD] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setAssignmentsD(assignments);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [assignments]);
 
  if (loading) return <Reloader />;

  return (
   <Fade triggerOnce={true} direction="up" duration={1000}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
      {assignmentsD.map((assignment) => (
        <AssignmentCard key={assignment._id} assignment={assignment} />
      ))}
    </div>
    </Fade>
  );
};

export default Assignments;
