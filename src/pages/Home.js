import logo from '../assets/she-is-me.png'
import Blogs from '../components/Blogs'
import NavBar from '../components/NavBar'

export default function Home() {

  

    return (
      <>
     <NavBar />
      <div className="home">
        <div className='container'>
       </div>
        <div className='blogs'>
         
            <img src={logo} alt="girl-ears" className='image'></img> 
            
            {<Blogs />}
        </div> 
      </div></>
    )
  }
