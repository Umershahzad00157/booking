import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Home from './components/Home';
import EventDetail from './components/EventDetail';

function App() {
  return (
    <div >
  <NavBar/>
  <EventDetail/>
    
    <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>

    </Routes>
    
    
          
    </div>
  );
}

export default App;
