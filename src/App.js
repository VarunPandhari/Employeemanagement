
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Employee from './components/Employee';
import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/employee' element={<Employee />} />
      </Routes>
      
    </>
  );
}

export default App;
