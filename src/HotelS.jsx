import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function HotelS(prop){

    const navigate = useNavigate();

    const[desTo,setDesTo]=useState(prop.dt);
    const[traveler,setTraveler]=useState(prop.tr);
    const[dateFrom,setDateFrom]=useState(prop.daf);
    const[dateTo,setDateTo]=useState(prop.dat);

    function handelSearch(){

        navigate("/HotelB",{state:{desTo,traveler,dateFrom,dateTo}})
          
    }

    return(
        <hotel>
            <div className="p-8 px-20 h-fit rounded-xl text-xl bg-Scolor text-Fcolor">
            <h1 className="text-2xl font-medium">Search Hotel</h1>
            <div className="flex flex-wrap flex-row justify-evenly items-center">
                <div className="border-2 rounded-xl mt-2 p-10 h-fit w-fit border-Fcolor flex flex-wrap gap-10 items-center">
                    <div>
                        <h1 className=" font-medium ">Destination</h1>
                        <input className="bg-Scolor p-2" value={desTo} placeholder="where to go?" onChange={(e)=> setDesTo(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className=" font-medium ">Guests</h1>
                        <input className="bg-Scolor p-2" value={traveler} placeholder="Add Guests" onChange={(e)=> setTraveler(e.target.value)}/>
                    </div>
                </div>
                <div className="border-2 rounded-xl mt-2 p-10 h-fit w-fit border-Fcolor flex flex-wrap gap-10 items-center">
                    <div>
                        <h1 className=" font-medium ">Check In</h1>
                        <input className="bg-Scolor p-2" type="date" value={dateFrom} placeholder="Add date" onChange={(e)=> setDateFrom(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className=" font-medium ">Check Out</h1>
                        <input className="bg-Scolor p-2" type="date" value={dateTo} placeholder="Add date" onChange={(e)=> setDateTo(e.target.value)}/>
                    </div>
                </div>
            </div>
            <button onClick={handelSearch} className="bg-Tcolor mt-2 rounded-lg text-Scolor h-fit w-fit p-2 px-10">Search</button>
            </div>
            </hotel>
    )
}