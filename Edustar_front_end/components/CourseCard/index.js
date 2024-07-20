import React from "react";
import Link from "next/link";
import styles from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  return (
    <Link href={`/course/${course.id}`} passHref>
      <div className={styles.card}>
        <img
          src={course.course_title_img}
          alt={course.course_title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3>{course.course_title}</h3>
          <p>Organization: {course.course_organization}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
