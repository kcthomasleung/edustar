import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";
// import styles from "../SwipeableCourses/SwipeableCourses.module.css";

import { BsFillPeopleFill } from "react-icons/bs";
// import { solveMathProblem } from "@/utils/gpt";
import { motion } from "framer-motion";
import CourseCard from "../CourseCard";
import SwipeableCourses from "../SwipeableCourses";

const Search = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResultsLocal] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  // const [showSwipeableCourses, setShowSwipeableCourses] = useState(true);
  // const [solution, setSolution] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const cardVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/${searchTerm}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
          },
        }
      );

      const results = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setSearchResults(results);
      // if (setSearchResultsLocal) {
      //   setSearchResults(results);
      // }

      // console.log(results)

      // const solutions = await Promise.all(results.map(result => solveMathProblem(result)));
      // setSolution(solutions);
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  };

  const openModal = async (result) => {
    // const solution = await solveMathProblem(result);
    // setSelectedResult({ ...result, solution });
    // setSelectedOption("");
  };

  const closeModal = () => {
    // setSelectedResult(null);
    // setSelectedOption("");
  };

  // handleSearch() {
  // solution = await solveMathProblem
  // }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles["search-bar"]}
      />
      <button onClick={handleSearch} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
};

export default Search;

// import { useState } from "react";
// import axios from "axios";
// import styles from "./search.module.css";
// import SwipeableCourses from "../SwipeableCourses"; // Import the SwipeableCourses component

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSwipeableCourses, setShowSwipeableCourses] = useState(true);

//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8000/search/${searchTerm}`,
//         {
//           headers: {
//             "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
//           },
//         }
//       );

//       const results = Array.isArray(response.data)
//         ? response.data
//         : [response.data];
//       setSearchResults(results);
//       setShowSwipeableCourses(false);
//     } catch (error) {
//       console.error(`Error occurred: ${error}`);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//         className={styles["search-bar"]}
//       />
//       <button onClick={handleSearch} className={styles["search-button"]}>
//         Search
//       </button>
//       {searchResults.length > 0 && (
//         <SwipeableCourses courses={searchResults} coursesPerPage={4} />
//       )}
//     </div>
//   );
// };

// export default Search;
