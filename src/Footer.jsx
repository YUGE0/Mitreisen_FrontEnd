import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    const [isAdminIn, setIsAdminIn] = useState(false);
  
  useEffect(() => {
    const type = localStorage.getItem("userType");
    setIsAdminIn(type);
    console.log(type);
  }, []);
    return(
        <div className="font-open">
            <div className="bg-Tcolor h-fit p-8">
            <img className="" src="logo.svg"/>
                <div className="flex flex-wrap justify-around items-start">
                    <div className="">
                        <div className="p-10"><h1 className="text-Fcolor text-3xl font-bold">Unveiling Exquisite Adventures</h1><h2 className="font-light text-lg">Explore, Experience, and Elevate Your Journeys with Us.</h2></div>
                        <div className="p-10 flex flex-wrap flex-col"><h1 className="text-Fcolor text-3xl font-bold">Contact Us</h1><a className="font-light text-lg">Email</a><a className="font-light text-lg">Address</a>{isAdminIn==="Admin"?<Link to={"/Admin"}>Admin</Link>:null}</div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex flex-wrap flex-col w-fit p-10">
                            <h1 className="text-Fcolor text-3xl font-bold">Destinations</h1>
                            <Link to={"/Ahmedabad"} className="font-light text-lg">Ahmedabad</Link>
                            <Link to={"/Mumbai"} className="font-light text-lg">Mumbai</Link>
                            <Link to={"/Leh"} className="font-light text-lg">Leh</Link>
                            <Link to={"/Kerala"} className="font-light text-lg">Kerala</Link>
                            <Link to={"/Simla"} className="font-light text-lg">Simla</Link>
                            <h1 className="text-Fcolor text-3xl font-bold">Pages</h1>
                            <Link to={"/About"} className="font-light text-lg">About</Link>
                            <Link to={"/"} className="font-light text-lg">Home</Link>
                        </div>
                        <div className="flex flex-wrap flex-col w-fit p-10">
                            <h1 className="text-Fcolor text-3xl font-bold">Follow Us</h1>
                            <a className="font-light text-lg">Instagram</a>
                            <a className="font-light text-lg">Twitter</a>
                            <h1 className="text-Fcolor text-3xl font-bold">Bookings</h1>
                            <Link to={"/"} className="font-light text-lg">Flight</Link>
                            <Link to={"/"} className="font-light text-lg">Train</Link>
                            <Link to={"/"} className="font-light text-lg">Hotel</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 p-2 border-Fcolor">&copy; 2024 Mitreisen All rights reserved</div>
            </div>
        </div>
    )
}