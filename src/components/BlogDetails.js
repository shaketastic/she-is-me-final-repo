// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Container from 'react-bootstrap/Container';
// import { Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// const API = process.env.REACT_APP_API_URL;

// export default function BlogDetails() {
//     const [ blog, setBlogs ] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);


//     const showModal = () => {
//       setIsOpen(true);
//     };
  
//     const hideModal = () => {
//       setIsOpen(false);
//     };

//     const { id } = useParams();
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         axios
//         .get(`${API}/blogs/${id}`)
//         .then((res) => {
//             setBlogs(res.data);
//           }).catch((e) => {
//             console.warn('catch', e)
//           })
//         }, [id]);



//     const deleteBlog = () => {
//         axios.delete(`${API}/blogs/${id}`)
//         .then(() => {
//             navigate(`/blogs`);
//         },
//         (error) => console.error(error)
//         )
//         .catch((c) => console.warn('catch', c));
//     };

//     const handleDelete = () => {
//         deleteBlog();
//     }

//   return (
//     <div className='blog-details'>
//     <Container>
//         <h2><span>{blog.is_anonymous ? '❤️' : null}</span>{blog.name}</h2>
//         <ul>
//         <li>
//         <span><b>Title: </b>{blog.title}</span>
//         </li>
//         <li>
//         <span><b>Name: </b>{blog.name}</span>
//         </li>
//         <li>
//         <span><b>Age: </b>{blog.age}</span>
//         </li>
//         <li>
//         <span><b>Content: </b>{blog.content}</span>
//         </li>
//         <li>
//         <span><b>Created: </b>{blog.created_at}</span>
//         </li>
//         <li>
//         <span>Are you anonymous?: {blog.is_anonymous ? <span>✅</span> : <span>❌</span>}</span>
//         </li>
//         </ul>
    
//       <div className="showNavigation">
//         <div>
//           {" "}
//           <Link to={`/blogs`} >
//           <button>BACK</button>
//           </Link>

//           <Link to={`/blogs/${id}/edit`} >
//           <button>EDIT</button>
//           </Link>
//           <button onClick={showModal}>DELETE</button>
//         <Modal show={isOpen} onHide={hideModal}>
//         <Modal.Header>
//           <Modal.Title>Confirmation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
//         <Modal.Footer>
//           <button onClick={hideModal}>CANCEL</button>
//           <button onClick={handleDelete}>DELETE</button>
//         </Modal.Footer>
//       </Modal>
//         </div>
//         </div>
//     </Container>
//   </div>
//   );
// };
