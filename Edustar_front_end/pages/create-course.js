import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Course Created:", { title, description, content });
  };

  const connectWallet = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ ...containerStyle, marginTop: "100px" }}>
        {" "}
        {/* Adjust this value to match the navbar height */}
        <h1>Create New Course</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="title">Course Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="description">Course Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={textareaStyle}
            ></textarea>
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="content">Course Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={textareaStyle}
            ></textarea>
          </div>
          <button type="submit" style={buttonStyle}>
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  borderRadius: "10px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const formGroupStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid",
  minHeight: "100px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default CreateCourse;
