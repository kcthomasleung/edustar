import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courses from "../../data/courses.json"; // Make sure to place your JSON data in this path

const CoursePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch course data based on the id
      // This could be a call to an API or a static file
      // For demonstration, I'm using static data
      const fetchCourseData = async () => {
        const courseData = await fetch(`/api/courses/${id}`).then((res) =>
          res.json()
        );
        setCourse(courseData);
      };
      fetchCourseData();
    }
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      {/* Render more course details here */}
    </div>
  );
};

export default CoursePage;
