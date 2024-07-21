// import React, { useState } from "react";
// import CourseCard from "../CourseCard";
// import styles from "./SwipeableCourses.module.css";
// import { motion } from "framer-motion";
// const SwipeableCourses = ({ courses, coursesPerPage=1}) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   // console.log(courses)
//   const totalPages = Math.ceil(courses.length / coursesPerPage);

//   const startIndex = (currentPage - 1) * coursesPerPage;
//   const currentCourses = courses.slice(startIndex, startIndex + coursesPerPage);

//   const cardVariants = {
//     initial: { scale: 1 },
//     animate: { scale: 1.1 },
//   };
//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.cardsContainer}>
//         {currentCourses.map((course, index) => (
//           <motion.div
//             className={styles["card"]}
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             whileHover="animate"
//           >
//             <CourseCard key={index} course={course} />

//           </motion.div>
//         ))}
//       </div>
//       <div className={styles.pagination}>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwipeableCourses;

import React, { useState } from "react";
import CourseCard from "../CourseCard";
import styles from "./SwipeableCourses.module.css";
import { motion } from "framer-motion";

const SwipeableCourses = ({ courses, coursesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + coursesPerPage);
  const cardVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {currentCourses.map((course, index) => (
          <motion.div
            className={styles["card"]}
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="animate"
          >
            <CourseCard key={index} course={course} />
          </motion.div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SwipeableCourses;
