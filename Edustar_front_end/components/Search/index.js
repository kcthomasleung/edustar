import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";
import { BsFillPeopleFill } from "react-icons/bs";
// import { solveMathProblem } from "@/utils/gpt";
import { motion } from "framer-motion";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
      const response = await axios.get(`http://127.0.0.1:8000/search/${searchTerm}`, {
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
        }
      });
  
      const results = Array.isArray(response.data) ? response.data : [response.data];
      setSearchResults(results);
  
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
      {/* // solution = await solveMathProblem */}
      {searchResults.length > 0 && (
        <div className={styles["card-grid"]}>
          {searchResults.map((result, index) => (
             <motion.div
             className={styles["card"]}
             key={index}
             onClick={() => openModal(result)}
             variants={cardVariants}
             initial="initial"
             whileHover="animate"
           >
             <h3>{result.course_title}</h3>
             <p>{result.course_organization}</p>
             <p>Rank: {result.course_rating}</p>
             <p>Difficulty: {result.course_difficulty}</p>
             <p>
               {result.course_students_enrolled}{" "}
               <BsFillPeopleFill />
             </p>
           </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;