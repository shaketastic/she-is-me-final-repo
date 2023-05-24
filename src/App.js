import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Index from './pages/Index';
import Login from './pages/Login';
import New from './pages/New';
import Show from './pages/Show';
import Register from './pages/Register';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/blogs" element={<Index />} /> 
              <Route path="/blogs/:id" element={<Show />} />
              <Route path="/blogs/new" element={<New />} />
              <Route path="/blogs/:id/edit" element={<Edit />} />
              <Route path="/blogs/register" element={<Register />} />
              <Route path="/blogs/login" element={<Login />} />
            </Routes>
          </main>
        </Router>  
    </div>    
    );
}
  

export default App;
