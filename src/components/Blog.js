import { Link } from "react-router-dom";

function Blog({ blog }) {
  return (
    <tr>
      <td>
        {blog.is_anonymous ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={blog.title} target="_blank" rel="noreferrer">
          {blog.content}
        </a>
      </td>
      <td>
        <Link to={`/blogs/${blog.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Blog;