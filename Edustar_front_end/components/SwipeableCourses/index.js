import React from "react";
import { useSwipeable } from "react-swipeable";
import CourseCard from "../CourseCard";
import styles from "./SwipeableCourses.module.css";

const SwipeableCourses = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => Math.min(prev + 1, courses.length - 1)),
    onSwipedRight: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
  });

  return (
    <div className={styles.container} {...handlers}>
      <div
        className={styles.cardsContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCourses;
