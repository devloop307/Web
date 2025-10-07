import { motion } from "framer-motion";

function ProgressBar({ paso }) {
  const progreso = ((paso - 1) / 2) * 100; // 3 pasos en total

  return (
    <div className="w-full bg-gray-200 h-2 fixed top-0 left-0 z-50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progreso}%` }}
        transition={{ duration: 0.4 }}
        className="h-full bg-blue-600"
      ></motion.div>
    </div>
  );
}

export default ProgressBar;
