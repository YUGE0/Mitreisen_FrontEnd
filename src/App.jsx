import React,{ useEffect, useState } from 'react'
import { Route, Routes, Navigate} from "react-router-dom"
import Nav from './NavBar'
import Footer from './Footer'
import Login from './Login'
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Info from './Info'
import PageNot from './PageNotFound'
import FlightBook from './FlightBooking'
import TrainBook from './TrainBooking'
import HotelBook from './HotelBooking'
import Admin from './Admin'
import Amd from './Destination/Amd'
import Des from './Destination/DestinationPage'
import Bom from './Destination/Bom'
import Krl from './Destination/Krl'
import Leh from './Destination/Leh'
import Sim from './Destination/Sim'
import Booking from './Book'
import './App.css'

function App() 
{
  const [isAdminIn, setIsAdminIn] = useState(false);
  
  useEffect(() => {
    const type = localStorage.getItem("userType");
    setIsAdminIn(type);
  }, []);

  //console.log(isAdminIn);


  //const [currentForm , setForm] = useState("login"); 
  //const toggleForm = (name) => { setForm(name); }
  // <>
  //   {
  //     currentForm === "login" ? <Login onFS={toggleForm}/> : <Signup onFS={toggleForm}/>
  //   }
  // </>
  //className="bg-fixed bg-cover bg-no-repeat bg-[url('/pexels-andrei-tanase-1271619.jpg')]"

  //Verwaltung = Admin 

  return (
    <div>
      <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Ahmedabad" element={<Des p="Ahmedabad"/>}/>
            <Route path="/Mumbai" element={<Des p="Mumbai"/>}/>
            <Route path="/Kerala" element={<Des p="Kerala"/>}/>
            <Route path="/Leh" element={<Des p="Leh"/>}/>
            <Route path="/Haridwar" element={<Des p="Haridwar"/>}/>
            <Route path="/FlightB" element={<FlightBook/>}/>
            <Route path="/TrainB" element={<TrainBook/>}/>
            <Route path="/HotelB" element={<HotelBook/>}/>
            <Route path="/Admin" element={isAdminIn ? <Admin /> : <PageNot/>}/>
            <Route path="/Book" element={<Booking/>}/>
            <Route path="*" element={<PageNot />} />
          </Routes>
      </div>
    <Footer />
    </div>
  )
}
  
export default App
