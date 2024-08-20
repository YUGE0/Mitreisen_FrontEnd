import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

export default function Signup(props)
{
    const navigate = useNavigate();

    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")
    const[fname,setFn] = useState("")
    const[cpass,setCpass] = useState("")

    const handleonClick = async (e) =>{
        //console.log(email+pass);
        try {
            // Make a POST request to the server endpoint with data
            const data = await axios.post(`http://localhost:3000/addSignupData`, { fname,email,pass});
            console.log('Data added successfully' + " " + data.data.message);
            alert(data.data.message);
            localStorage.setItem("useName",fname);
            localStorage.setItem("userEmail",email);
            navigate("/Login");

            //fetchData();
          } catch (error) {
            console.error('Error adding data:', error.message);
          }
    }

    return(
        <div className="h-fit mx-20 ml-0 bg-Scolor flex">
        <div className="">
            <img className="p-20 border-b-8 border-Fcolor" src="/SignUp_svg.png" alt="Signup_Img"/>
        </div>
        <div className="bg-Fcolor w-[60%] flex-col">
            <img className="ml-12 justify-self-end" src="/logo.svg" alt="Mitreisen" />
            <div className="p-20 w-full">
                <h1 className="font-space font-semibold text-7xl">Signup</h1><br></br><br></br>
                <h1 className="font-Inter font-medium text-3xl">Name</h1>    <input type="text" value={fname} onChange={(e)=> setFn(e.target.value)} className="font-inter w-full text-Tcolor text-2xl border-none p-1"/><p class="mt-2 invisible">yo</p>
                <h1 className="font-Inter font-medium text-3xl">Email</h1>   <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="peer font-inter w-full text-Tcolor text-2xl border-none p-1"/><p class="mt-2 invisible peer-invalid:visible text-red-500 font-semibold text-md">Please provide a valid email address.</p>
                <h1 className="font-Inter font-medium text-3xl">Password</h1><input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} className="font-inter w-full text-Tcolor text-2xl border-none p-1"/><p class="mt-2 invisible">yo</p>
                <h1 className="font-Inter font-medium text-3xl">Confirm Password</h1>  <input type="text" value={cpass} onChange={(e)=> setCpass(e.target.value)} className="font-inter w-full text-Tcolor text-2xl border-none p-1"/><p class="mt-2 invisible">yo</p>
                <div className="flex flex-wrap justify-around p-10 gap-10">
                    <button onClick={handleonClick} className=" bg-Scolor text-Fcolor  hover:bg-Tcolor hover:text-Scolor font-space text-nowrap font-semibold p-2 text-3xl">Create Account</button>
                    <button onClick={() => navigate("/Login")} className=" bg-Scolor text-Fcolor  hover:bg-Tcolor hover:text-Scolor font-space font-semibold p-2 text-3xl">Login</button>
                </div>
            </div>
        </div>
        </div>
    )
}