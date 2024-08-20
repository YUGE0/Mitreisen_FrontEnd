import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props)
{
    const navigate = useNavigate();

    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")

    const handleonClick = async (e) =>{
        try {
            // Make a POST request to the server endpoint with data
            const data = await axios.post(`http://localhost:3000/seLoginData`, { email,pass});
            console.log('Data added successfully' + " " + data.data.message);
            //console.log(data.data);
            if(data.data!==null){
                alert(data.data.message);
                localStorage.setItem("userEmail",email);
                localStorage.setItem("userType",data.data.type);
                localStorage.setItem("userName",data.data.uname);
                localStorage.setItem("userToken",data.data.token);
                navigate("/");
            }
            else if(data.data.message==="Login unsuccessfully"){
                alert(data.data.message);
            }
            else{
                alert("Wrong Uername password.")
            }

            //fetchData();
          } catch (error) {
            console.error('Error adding data:', error.message);
          }
    }

    return(
        <div className="h-fit mx-20 mr-0 bg-Scolor flex justify-between">
        <div className="bg-Fcolor w-[60%]">
            <img className="" src="/logo.svg" alt="Mitreisen" />
            <div className="p-20">
                <h1 className=" font-space font-semibold text-7xl py-20">Login</h1>
                <label className=" font-Inter font-medium text-4xl">Email</label> <input  value={email} onChange={(e)=> setEmail(e.target.value)} className="peer w-full font-inter text-2xl text-Tcolor border-none p-1" type="email"/><p class="mt-2 invisible peer-invalid:visible text-red-500 font-semibold text-md">Please provide a valid email address.</p><br></br><br></br>
                <label className=" font-Inter font-medium text-4xl">Password</label><input  value={pass} onChange={(e)=> setPass(e.target.value)} className="w-full font-inter text-2xl text-Tcolor border-none p-1" type="password"/><br></br><br></br>
                <div className="flex flex-wrap justify-around p-10">
                    <button onClick={handleonClick} className=" bg-Scolor text-Fcolor  hover:bg-Tcolor hover:text-Scolor font-space font-semibold p-2 text-3xl">Login</button>
                    <button onClick={() => navigate("/Signup")} className=" bg-Scolor text-Fcolor  hover:bg-Tcolor hover:text-Scolor font-space font-semibold p-2 text-3xl">Signup</button>
                </div>
            </div>
        </div>
        <div className="">
            <img className="p-20 border-b-8 border-Fcolor" src="/Login_svg.png" alt="Login_Img"/>
        </div>
        </div>
    )
}