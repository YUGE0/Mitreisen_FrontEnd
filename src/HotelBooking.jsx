import React,{useState,useEffect} from "react";
import axios from "axios";
import HotelS from "./HotelS";
import Data from "./HotelDetails";
import Nav from "./NavBar";
import { useLocation, useNavigate } from "react-router-dom";

export default function HotelBook()
{
    const location = useLocation();
    const navigate = useNavigate();

    const[hotelData,setHotelData]=useState({
        desTo:location.state.desTo,
        traveler:location.state.traveler,
        dateFrom:location.state.dateFrom,
        dateTo:location.state.dateTo,
    });

    const[data,setData] = useState([])
    useEffect(()=>{fetchData()},[]) 

    const fetchData = async () => { 
        const desTo = hotelData.desTo;
    
        const res = await axios.post(`http://localhost:3000/seHotelData`,{desTo})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setData(res.data)
        console.log(res.data)
    }


    const hotelPanel = data.map(i=>{return(
        <div className="flex flex-wrap my-8 p-10 bg-Scolor text-Fcolor rounded-2xl font-work justify-around items-center">
                <div className="items-center"><img className="h-96 rounded-xl shadow-Tcolor shadow-lg" src={i.url} alt={i.fname}/></div>
                <div className="">
                      <div className="flex flex-col p-10 justify-around space-y-5">
                          <h1 className="text-6xl font-semibold">{i.fname}</h1>
                          <h1 className="text-3xl font-light">{i.desTo}</h1>
                      </div>
                    <div className="px-10">
                        <h1 className="text-2xl text-Fcolor">Services</h1>
                        <h1 className="">{i.services}</h1>
                    </div>
                    <div className="p-10 flex space-x-20">
                       <div className=""><h1 className="text-6xl font-semibold">{i.price}</h1><p>+Taxes/per night</p></div>
                       <div className=""><button onClick={
                        function handelBook(){
                            const fname = i.fname;
                            //const desFrom = i.desFrom;
                            const desTo = i.desTo;
                            const traveler = hotelData.traveler;
                            //const departure = i.departure;
                            const arrival = i.arrival;
                            //const cla = i.cla;
                            //const trip = i.trip;
                            let price = i.price;
                            price = (price*traveler);
                            const dateFrom = hotelData.dateFrom;
                            const dateTo = hotelData.dateTo;
                            const service = i.services;

                            if(localStorage.getItem("userToken")!==null){
                                navigate("/Book",{state:{book:"Hotel",fname,desTo,traveler,price,dateFrom,dateTo,service}})
                            }
                            else{
                                navigate("/Login")
                            }
                        }
                       } className="shadow-md shadow-Fcolor rounded-xl p-3 px-10 w-full font-semibold text-3xl">Book</button></div>
                    </div>
                </div>
            </div>
    )})
    return(
        <div className="px-20">
            <Nav/>
            <div className="font-work flex flex-col flex-wrap justify-around">
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-t from-Scolor from-40% to-Fcolor">Book</div>
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-b from-Scolor from-50% to-Fcolor place-self-end">Hotel</div>
            </div>
            <HotelS dt={hotelData.desTo} tr={hotelData.traveler} daf={hotelData.dateFrom} dat={hotelData.dateTo}/>
            {data.length===0 ?<div className="p-20 flex"><img className="w-1/2 " src="NotFound.svg"/><h1 className="text-8xl font-bold">No Data</h1></div> : hotelPanel}
        </div>
    )
}