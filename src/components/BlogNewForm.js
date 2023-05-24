import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BlogNewForm() {
  let navigate = useNavigate();

  const addedBlog = (newBlog) => {
    axios
      .post(`${API}/blogs`, newBlog)
      .then(
        () => {
          navigate(`/blogs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [blogs, setBlogs] = useState({
    title: "",
    name: "",
    age: "",
    content: "",
    created_at: "",
    is_anonymous: false
  });

  const handleTextChange = (event) => {
    setBlogs({ ...blogs, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBlogs({ ...blogs, is_anonymous: !blogs.is_anonymous});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addedBlog(blogs);
  };

  
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title:</label>
        <input
          id="title"
          value={blogs.title}
          type="text"
          onChange={handleTextChange}
          placeholder="title"
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={blogs.name}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          value={blogs.age}
          placeholder=""
          onChange={handleTextChange}
        />

        <label htmlFor="content">Content:</label>
        <input
          id="content"
          type="text"
          name="content"
          value={blogs.content}
          placeholder=""
          onChange={handleTextChange}
        />

        <label htmlFor="created_at">created_at:</label>
        <input
          id="created_at"
          type="number"
          name="created_at"
          value={blogs.created_at}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="is_anonymous">Anonymous?:</label>
        <input
          id="is_anonymous"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={blogs.is_anonymous}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BlogNewForm;
