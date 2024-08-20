import React, { useEffect, useState } from "react";
import axios from "axios";
import FlightS from "./FlightS";
//import Data from "./FlightDetails";
import Nav from "./NavBar";
import { useNavigate,useLocation } from "react-router-dom";

export default function FlightBook()
{
    const location = useLocation();
    const navigate = useNavigate();

    const[flightData,setFlightData]=useState({
        desFrom:location.state.desFrom,
        desTo:location.state.desTo,
        traveler:location.state.traveler,
        dateFrom:location.state.dateFrom,
        dateTo:location.state.dateTo,
        cla:location.state.cla,
        trip:location.state.trip,
    });

    
    const[data,setData] = useState([])
    useEffect(()=>{fetchData()},[]) 
    
    const fetchData = async () => { 
        const desFrom = flightData.desFrom;
        const desTo = flightData.desTo;
        const cla = flightData.cla;
        
        console.log(desFrom+desTo+cla)
        
        const res = await axios.post(`http://localhost:3000/seFlightData`,{desFrom,desTo,cla})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setData(res.data)
        console.log(res.data)
    }
    
    
    
    //fetchData();
    
    const flightPanel = data.map(i=>{return(
        <div className="bg-Scolor text-Fcolor rounded-2xl font-work my-10">
            <div className="flex flex-wrap p-5 justify-around gap-x-40 items-center">
            <img className="h-32 rounded-xl" src={i.url} alt={i.fname}/>
            <div className="p-8">
                <div className="flex flex-wrap p-2 gap-x-10">
                    <div className="p-2">
                        <h2 className="font-light text-5xl">{i.departure}</h2>
                        <h1 className="font-semibold text-5xl">{i.desFrom}</h1>
                    </div>
                    <div className="p-10 self-center">
                        <h2>{i.duration}</h2>
                        <img src="Plan.svg"/>
                    </div>
                    <div className="p-2">
                        <h2 className="font-light text-5xl">{i.arrival}</h2>
                        <h1 className="font-semibold text-5xl">{i.desTo}</h1>
                    </div>
                </div>
            </div>
            </div>    
            <div className="flex p-5 justify-around items-baseline">
                <div className=""><h1 className="text-6xl font-semibold">{flightData.trip==="One"?i.price:i.price}</h1><p>+Taxes/per person</p></div>
                <div className="p-3 self-baseline">
                    <h1 className="px-2 font-light text-3xl">Services</h1>
                    <h1 className="px-2 font-light text-xl">{i.services}</h1>
                </div>
                <button onClick={
                    function handelBook(){
                        const fname = i.fname;
                        const desFrom = i.desFrom;
                        const desTo = i.desTo;
                        const traveler = flightData.traveler;
                        const departure = i.departure;
                        const arrival = i.arrival;
                        const cla = i.cla;
                        const trip = i.trip;
                        let price = i.price;
                        price = (price*traveler);
                        const dateFrom = flightData.dateFrom;
                        const dateTo = flightData.dateTo;
                        if(localStorage.getItem("userToken")!==null){
                            navigate("/Book",{state:{book:"Flight",fname,desFrom,desTo,traveler,departure,arrival,cla,trip,price,dateFrom,dateTo}})
                        }
                        else{
                            navigate("/Login")
                        }
                    }
                } className="rounded-xl shadow-md shadow-Fcolor p-3 w-52 font-semibold text-3xl">Book</button>
            </div>
        </div>
    )})
    
    return(
        <div className="px-20">
            <Nav/>
            <div className="font-work flex flex-col flex-wrap justify-around">
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-t from-Scolor from-40% to-Fcolor">Book</div>
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-b from-Scolor from-50% to-Fcolor place-self-end">Flight</div>
            </div>
            <FlightS df={flightData.desFrom} dt={flightData.desTo} tr={flightData.traveler} daf={flightData.dateFrom} dat={flightData.dateTo} cl={flightData.cla} tp={flightData.trip}/>
            {data.length===0 ?<div className="my-10 flex"><img className="w-1/2 " src="NotFound.svg"/><h1 className="text-8xl font-bold">No Data</h1></div> : flightPanel}
        </div>
    )
}
// const[desFrom,setDesFrom]=useState(location.state.desFrom);
// const[desTo,setDesTo]=useState(location.state.desTo);
// const[traveler,setTraveler]=useState(location.state.traveler);
// const[dateFrom,setDateFrom]=useState(location.state.dateFrom);
// const[dateTo,setDateTo]=useState(location.state.dateTo);
// const[cla,setCla]=useState(location.state.cla);
// const[trip,setTrip]=useState(location.state.trip);

//setFlightData(desFrom)
//console.log(flightData.desFrom+flightData.desTo);