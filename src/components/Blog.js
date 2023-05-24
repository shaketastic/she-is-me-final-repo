import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Blog( { blog } ) {

  return (
   <Container>
     <span>{blog.is_anonymous ? '❤️' : null}</span>
     <Link to={`/blogs/${blog.id}`}>{blog.name}</Link>
     <Link to={`/blogs/${blog.id}`}>
     {/* <img className="rounded mx-auto d-block" src={blog.image} alt='snack' width='150' height='150'/> */}
     </Link>
   </Container>
  );
}