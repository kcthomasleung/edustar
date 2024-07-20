import React from "react";
import Link from "next/link";
import styles from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  return (
    <Link href={`/course/${course.id}`} passHref>
      <div className={styles.card}>
        <img src={course.image} alt={course.title} className={styles.image} />
        <div className={styles.content}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
