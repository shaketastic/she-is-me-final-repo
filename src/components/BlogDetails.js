import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

 const API = process.env.REACT_APP_API_URL

function BlogDetails() {
  const [blogs, setBlogs] = useState([]);
  const {id} = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    axios.get(`${API}/blogs/${id}`)
      .then((response) => {
      console.log(response.data)
      setBlogs(response.data)
      }).catch((e) => {
        console.warn("catch", e)
      })
    
  }, [id, API])

  //delete
  const deleteBlog = () => {
    axios.delete(`${API}/blogs/${id}`)
    .then(() => {
      navigate(`/blogs`);
    },
    (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
  }

  const handleDelete = () => {
    deleteBlog();
  }


  return (
    <article>
      <h3>{blogs.is_anonymous ? <span>⭐️</span> : null} {blogs.name}</h3>
    <h5>
      <span>
          <a href={blogs.title}>{blogs.content}</a>
      </span> {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {blogs.title}
    </h5>
      <h6>{blogs.content}</h6>
      <p>{blogs.age}</p>
      
      <div className="showNavigation">

        <div>
          {" "}
          <Link to={`/blogs`} >
          <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/blogs/${id}/edit`}>
          <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDelete}>Delete</button>
        </div> 
    </div>

  </article>
  );
};

export default BlogDetails;