import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrainS(prop){

    const navigate = useNavigate();

    const[desFrom,setDesFrom]=useState(prop.df);
    const[desTo,setDesTo]=useState(prop.dt);
    const[traveler,setTraveler]=useState(prop.tr);
    const[dateFrom,setDateFrom]=useState(prop.daf);
    const[dateTo,setDateTo]=useState(prop.dat);
    const[cla,setCla]=useState(prop.cl);
    const[trip,setTrip]=useState(prop.tp);

    console.log(cla);
    function handelSearch(){

        navigate("/TrainB",{state:{desFrom,desTo,traveler,dateFrom,dateTo,cla,trip}})
          
    }


    return(
        <>
        <div className="p-8 px-20 h-fit text-xl rounded-xl bg-Scolor text-Fcolor">
        <h1 className="text-2xl font-medium">Search Train</h1>
        <form>
        <div className="flex flex-wrap flex-row justify-evenly items-center">
                <div className="border-2 rounded-xl mt-2 p-10 h-fit border-Fcolor flex flex-wrap justify-between items-center">
                    <div>
                        <h1 className=" font-medium ">Destination From</h1>
                        <input value={desFrom} name="df" onChange={(e)=> setDesFrom(e.target.value)} className="bg-Scolor p-2 w-52" placeholder="your departure?"/>
                    </div>
                    <div>
                        <h1 className=" font-medium ">Destination To</h1>
                        <input value={desTo} name="dt" onChange={(e)=> setDesTo(e.target.value)} className="bg-Scolor p-2 w-52" placeholder="where to go?"/>
                    </div>
                    <div>
                        <h1 className=" font-medium ">Travelers</h1>
                        <input value={traveler} name="t" onChange={(e)=> setTraveler(e.target.value)} className="bg-Scolor p-2 w-52" type="number" placeholder="Add Traveler"/>
                    </div>
                </div>
                <div className="border-2 rounded-xl mt-2 p-10 h-fit border-Fcolor flex flex-wrap justify-between items-center">
                    <div>
                        <h1 className=" font-medium ">Departure</h1>
                        <input value={dateFrom} name="dp" onChange={(e)=> setDateFrom(e.target.value)} className="bg-Scolor p-2" type="date" placeholder="Add date"/>
                    </div>
                    { trip === "Round" &&
                      <div>
                        <h1 className=" font-medium ">Return</h1>
                        <input value={dateTo} name="rt" onChange={(e)=> setDateTo(e.target.value)} className="bg-Scolor p-2" type="date" placeholder="Add date"/>
                      </div>
                    }
                    <div>
                        <h1 className="font-medium ">Class</h1>
                        <select value={cla} name="cl" onChange={(e)=> setCla(e.target.value)} className="bg-transparent text-Tcolor w-48">
                            <option className=" bg-Fcolor text-Scolor">Select</option>
                            <option value={"Sleeper"} className=" bg-Fcolor text-Scolor">Sleeper</option>
                            <option value={"1A"} className=" bg-Fcolor text-Scolor">1A</option>
                            <option value={"2A"} className=" bg-Fcolor text-Scolor">2A</option>
                            <option value={"CC"} className=" bg-Fcolor text-Scolor">CC</option>
                        </select>
                    </div>
                </div>
        </div>
            </form>
        <div className="mt-4 w-full flex flex-wrap gap-y-2 justify-around text-Fcolor">            
        <button onClick={handelSearch} className="bg-Tcolor rounded-lg text-Scolor h-fit w-fit p-2 px-20">Search</button>
        <div className="flex flex-wrap gap-5">
            <div>
                <input name="trip" value={trip} onClick={()=>setTrip("Round")} type="radio"/> Round Trip
            </div> 
            <div>
                <input name="trip" value={trip} onClick={()=>setTrip("One")} checked type="radio"/> One Way
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

//setShow(prevShow => !prevShow)