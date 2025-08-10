import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Import icons from react-icons (you can pick other icons if you want)
import { FaClipboardList, FaFileUpload, FaCheckCircle, FaHourglassHalf, FaUsers } from "react-icons/fa";

const iconStyles = "text-4xl mb-3";

const CounterBox = ({ label, value, color, Icon }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center bg-white shadow-lg rounded-3xl p-8 border-t-8 ${color} w-64 mx-auto`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    >
      <Icon className={`${color.replace("border-", "text-")} ${iconStyles}`} />
      <h2 className="text-5xl font-extrabold text-gray-800">
        <CountUp end={value} duration={2} separator="," />
      </h2>
      <p className="text-lg font-semibold text-gray-600 mt-1 text-center">{label}</p>
    </motion.div>
  );
};

export default function StatsCounter() {
  const [stats, setStats] = useState({
    totalAssignments: 0,
    totalSubmissions: 0,
    totalMarked: 0,
    totalPending: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    fetch("https://b11a11-server-side-iam-freak10.vercel.app/stats") // Replace with your API URL
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <CounterBox
          label="Assignments Created"
          value={stats.totalAssignments}
          color="border-blue-500"
          Icon={FaClipboardList}
        />
        <CounterBox
          label="Submissions Made"
          value={stats.totalSubmissions}
          color="border-green-500"
          Icon={FaFileUpload}
        />
        <CounterBox
          label="Marked Submissions"
          value={stats.totalMarked}
          color="border-purple-500"
          Icon={FaCheckCircle}
        />
        <CounterBox
          label="Pending Marks"
          value={stats.totalPending}
          color="border-yellow-500"
          Icon={FaHourglassHalf}
        />
        <CounterBox
          label="Total Users"
          value={stats.totalUsers}
          color="border-pink-500"
          Icon={FaUsers}
        />
      </div>
    </div>
  );
}
