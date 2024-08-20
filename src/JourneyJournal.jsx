import React from "react";
import { useState } from "react";
import axios from "axios";
import Data from "./Review";

export default function Entry(){

    const[email,setEmail] = useState("")

    const element = Data.map(d =>{return(
            <div className="bg-Scolor rounded-2xl p-8 w-fit">
              <div className="flex flex-wrap items-center">
                 <img className="h-24 w-24 border-2 border-Fcolor rounded-2xl" src={d.img} alt=""/>
                 <div className="font-work p-5">
                     <h1 className="text-Fcolor text-5xl">{d.name}</h1>
                     <p  className="text-Tcolor font-medium">{d.loc}</p>
                 </div>
              </div>
              <p className="text-Tcolor text-balance font-medium p-2">{d.review}</p>
            </div>
    )})
    return(
        <div>
            <div className="bg-Fcolor bg-gradient-to-b from-Tcolor from-0% to-Fcolor to-15% p-20 font-open font-bold space-y-10">
            <h1  className="text-7xl">Journey Journal</h1>
            <div className="flex flex-wrap gap-10">{element}</div>
            </div>
            <div className="bg-Scolor h-fit p-10 space-y-8">
            <div className="flex flex-wrap flex-col items-center">
            <h1 className="text-Fcolor text-7xl font-medium">Subscribe to our newsletter</h1>
            <p className="text-Tcolor text-3xl">unlock a world of adventure!</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
            <input value={email} onChange={(e)=> setEmail(e.target.value)}  className="bg-Tcolor text-Scolor rounded-xl p-4 w-[50%] text-xl" placeholder="Email" type="email"/>
            <button onClick={
                 async (e) =>{
                    //let uname = localStorage.getItem("userName")
                    try {
                        await axios.post(`http://localhost:3000/sendNewLetter`, {email});
                        console.log('Data added successfully');
                      } catch (error) {
                        console.error('Error adding data:', error.message);
                      }
                    }
            } className="bg-Fcolor rounded-xl p-2 text-xl">Subscribe</button>
            </div>
            </div>
        </div>
        
    )
}