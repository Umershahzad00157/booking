import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
// import Home from './components/Home';

function App() {
  return (
    <div >
  <NavBar/>
    
    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    
    
          
    </div>
  );
}

export default App;
