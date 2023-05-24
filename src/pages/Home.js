import logo from '../assets/she-is-me.png'
import Blogs from '../components/Blogs'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function Home() {

  

    return (
      <>
     <NavBar />
      <div className="home">
        <div className='container'>
       </div>
        <div className='blogs'>
            <Link to={`/blogs`}>
            <img src={logo} alt="girl-ears" className='image'></img> 
            </Link>
            {<Blogs />}
        </div> 
      </div></>
    )
  }
