import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";
// import styles from "../SwipeableCourses/SwipeableCourses.module.css";

import { BsFillPeopleFill } from "react-icons/bs";
// import { solveMathProblem } from "@/utils/gpt";
import { motion } from "framer-motion";
import CourseCard from "../CourseCard";
import SwipeableCourses from "../SwipeableCourses";

const Search = ({ setSearchResults, setIsTitleClicked}) => {
  const [searchTerm, setSearchTerm] = useState("");
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
        setIsTitleClicked(false);

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