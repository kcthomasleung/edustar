import React, { useState } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Course Created:", { title, description, content, file });

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        // Assuming you have an endpoint to handle the file upload
        const uploadResponse = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("File uploaded successfully:", uploadResponse.data);
        // You can then send the uploaded file URL along with other course details to your backend
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div style={containerStyle}>
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
        <div style={formGroupStyle}>
          <label htmlFor="file">Upload Course Content</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            required
            style={fileInputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Create Course
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#fff",
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
  border: "1px solid #ddd",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  minHeight: "100px",
};

const fileInputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
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
