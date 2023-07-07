import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import TravelForm from './component/TravelDetails';
import Home from './component/Home';
import { inject } from '@vercel/analytics';
 
inject();
// import { Router } from 'react-router-dom';

function App() {
  return (

    
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='iamtraveling' element={<TravelForm />} />
        </Routes>
      </div>
    

  );
}

export default App;
