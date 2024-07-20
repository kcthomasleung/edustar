import React from "react";
import CourseCard from "../CourseCard";
import styles from "./SwipeableCourses.module.css";

const SwipeableCourses = ({ courses }) => {
  const limitedCourses = courses.slice(0, 12);

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {limitedCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCourses;
