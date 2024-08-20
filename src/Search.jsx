import React,{useState} from "react";
import FlightS from "./FlightS";
import HotelS from "./HotelS";
import TrainS from "./TrainS";

export default function Panel()
{
   const [currentSearch , setSearch] = useState(""); 
    
   return(
    <div>
        <div className=" mt-36 p-2 w-fit bg-Scolor flex gap-5 rounded-t-lg border-black text-xl">
            <h1 className="text-Tcolor p-2 ">Book</h1>
            <button onClick={()=> setSearch("Flight")} className="text-Scolor bg-Fcolor focus:bg-Scolor focus:text-Fcolor hover:bg-Scolor hover:text-Fcolor h-fit w-fit p-2 px-4 rounded-md">Flight</button>
            <button onClick={()=> setSearch("Train")}  className="text-Scolor bg-Fcolor focus:bg-Scolor focus:text-Fcolor hover:bg-Scolor hover:text-Fcolor h-fit w-fit p-2 px-4 rounded-md">Train</button>
            <button onClick={()=> setSearch("Hotel")}  className="text-Scolor bg-Fcolor focus:bg-Scolor focus:text-Fcolor hover:bg-Scolor hover:text-Fcolor h-fit w-fit p-2 px-4 rounded-md">Hotel</button>
            <h1 className="text-Tcolor p-2 ">Here :</h1>
        </div>
        <div className="bg-Scolor rounded-tr-xl">
        {currentSearch === "Flight" && <FlightS />}
        {currentSearch === "Train" && <TrainS />}
        {currentSearch === "Hotel" && <HotelS />}
        </div>
    </div>
   )
}