import React,{useState,useEffect} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Booking()
{
    const location = useLocation();
    const navigate = useNavigate();

    //const[da,setData] = useState([])

    const d = new Date();
    const date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    const uname = localStorage.getItem("userName");
    const uemail = localStorage.getItem("userEmail");


    const[bookData,setBookData]=useState({
        book:location.state.book,
        fname:location.state.fname,
        desFrom:location.state.desFrom,
        desTo:location.state.desTo,
        traveler:location.state.traveler,
        departure:location.state.departure,
        arrival:location.state.arrival,
        cla:location.state.cla,
        service:location.state.service,
        trip:location.state.trip,
        price:location.state.price,
        date:location.state.date,
        dateFrom:location.state.dateFrom,
        dateTo:location.state.dateTo,
        about:location.state.about,
        place:location.state.place,
        loc:location.state.loc,
    });
    
    //useEffect(()=>{fetchData()},[]) 

    const handleAdd = async (e) =>{
        const book = bookData.book;
        const fname = bookData.fname;
        const desFrom = bookData.desFrom;
        const desTo = bookData.desTo;
        const traveler = bookData.traveler;
        const departure = bookData.departure;
        const arrival = bookData.arrival;
        const cla = bookData.cla;
        const service = bookData.service; 
        const trip = bookData.trip;
        const price = bookData.price;
        const about = bookData.about;
        const place = bookData.place;
        const dateFrom = bookData.dateFrom;
        const dateTo = bookData.dateTo;
        

        //console.log(uemail);
        //const duration = flightData.duration;
        //const location = flightData.location;
        //setDashbord(prevcurrentDashbord=>{return(prevcurrentDashbord)})

        try {
            // Make a POST request to the server endpoint with data
            await axios.post(`http://localhost:3000/addBookingData`, {uemail,book,uname,fname,desFrom,desTo,traveler,departure,arrival,cla,service,trip,price,date,about,place,dateFrom,dateTo});
            console.log('Data added successfully');
            //fetchData();
            //setDashbord(addata)
          } catch (error) {
            console.error('Error adding data:', error.message);
          }
        }
    //console.log(bookData.book);

    return(
        <>
        {bookData.book==="Flight" && <div className="bg-Scolor p-40 space-y-10">
                                             <h1 className="font-open text-Fcolor font-semibold text-6xl px-20"> Your {bookData.book} Booking Details</h1>
                                             <div className=" backdrop-blur-lg p-20 border border-Fcolor rounded-2xl w-full text-Tcolor self-start flex">
                                                 <div className="w-fit"><img className="p-20 w-fit " src="Booking.svg"/></div>
                                                 <div className="w-full">
                                                 <h1 className=" font-inter font-light text-2xl">Name   : {uname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Air Line Name   : {bookData.fname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Destination From : {bookData.desFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Destination To : {bookData.desTo}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Date : {bookData.dateFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Departure Time : {bookData.departure}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Arrival Time : {bookData.arrival}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Class : {bookData.cla}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Price : {bookData.price}</h1>
                                                 <button onClick={handleAdd} className="mt-10 mr-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Pay</button>
                                                 <button onClick={
                                                    function handelBook(){
                                                        const desFrom = bookData.desFrom;
                                                        const desTo = bookData.desTo;
                                                        const traveler = bookData.traveler;
                                                        const cla = bookData.cla;
                                                        const trip = bookData.trip;
                                                        const dateFrom = bookData.dateFrom;
                                                        const dateTo = bookData.dateTo;
                            
                                                        navigate("/FlightB",{state:{desFrom,desTo,traveler,cla,trip,dateFrom,dateTo}})
                                                    }
                                                 } className="mt-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Cancel</button>
                                                 </div>
                                             </div>
                                     </div>
        }
        {bookData.book==="Train" && <div className="bg-Scolor p-40 space-y-10">
                                             <h1 className="font-open text-Fcolor font-semibold text-6xl px-20"> Your {bookData.book} Booking Details</h1>
                                             <div className=" backdrop-blur-lg p-20 border border-Fcolor rounded-2xl w-full text-Tcolor self-start flex">
                                                 <div className="w-fit"><img className="p-20 w-fit " src="Booking.svg"/></div>
                                                 <div className="w-full">
                                                 <h1 className=" font-inter font-light text-2xl">Name   : {uname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Train Name   : {bookData.fname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Destination From : {bookData.desFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Destination To : {bookData.desTo}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Date : {bookData.dateFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Departure Time : {bookData.departure}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Arrival Time : {bookData.arrival}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Class : {bookData.cla}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Price : {bookData.price}</h1>
                                                 <button onClick={handleAdd} className="mt-10 mr-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Pay</button>
                                                 <button onClick={
                                                    function handelBook(){
                                                        const desFrom = bookData.desFrom;
                                                        const desTo = bookData.desTo;
                                                        const traveler = bookData.traveler;
                                                        const cla = bookData.cla;
                                                        const trip = bookData.trip;
                                                        const dateFrom = bookData.dateFrom;
                                                        const dateTo = bookData.dateTo;
                            
                                                        navigate("/TrainB",{state:{desFrom,desTo,traveler,cla,trip,dateFrom,dateTo}})
                                                    }
                                                 } className="mt-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Cancel</button>
                                                 </div>
                                             </div>
                                     </div>
        }
        {bookData.book==="Hotel" && <div className="bg-Scolor p-40 space-y-10">
                                             <h1 className="font-open text-Fcolor font-semibold text-6xl px-20"> Your {bookData.book} Booking Details</h1>
                                             <div className=" backdrop-blur-lg p-20 border border-Fcolor rounded-2xl w-full text-Tcolor self-start flex">
                                                 <div className="w-fit"><img className="p-20 w-fit " src="Booking.svg"/></div>
                                                 <div className="w-full">
                                                 <h1 className=" font-inter font-light text-2xl">Name   : {uname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Hotel Name   : {bookData.fname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Destination To : {bookData.desTo}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Check In : {bookData.dateFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Check Out : {bookData.dateTo}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Service : {bookData.service}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Price : {bookData.price}</h1>
                                                 <button onClick={handleAdd} className="mt-10 mr-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Pay</button>
                                                 <button onClick={
                                                    function handelBook(){
                                                        const desFrom = bookData.desFrom;
                                                        const desTo = bookData.desTo;
                                                        const traveler = bookData.traveler;
                                                        const cla = bookData.cla;
                                                        const trip = bookData.trip;
                                                        const dateFrom = bookData.dateFrom;
                                                        const dateTo = bookData.dateTo;
                            
                                                        navigate("/HotelB",{state:{desFrom,desTo,traveler,cla,trip,dateFrom,dateTo}})
                                                    }
                                                 } className="mt-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Cancel</button>
                                                 </div>
                                             </div>
                                     </div>
        }
        {bookData.book==="Tour" && <div className="bg-Scolor p-40 space-y-10">
                                             <h1 className="font-open text-Fcolor font-semibold text-6xl px-20"> Your {bookData.book} Booking Details</h1>
                                             <div className=" backdrop-blur-lg p-20 border border-Fcolor rounded-2xl w-full text-Tcolor self-start flex">
                                                 <div className="w-fit"><img className="p-20 w-fit " src="Booking.svg"/></div>
                                                 <div className="w-full">
                                                 <h1 className=" font-inter font-light text-2xl">Name   : {uname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Tour Name   : {bookData.fname}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Places : {bookData.place}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Date : {bookData.dateFrom}</h1>
                                                 <h1 className=" font-inter font-light text-2xl">Price : {bookData.price}</h1>
                                                 <button onClick={handleAdd} className="mt-10 mr-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Pay</button>
                                                 <button onClick={
                                                    function handelBook(){  
                                                        const loc = bookData.loc;                          
                                                        navigate(`/${loc}`)
                                                    }
                                                 } className="mt-10 shadow-md shadow-Fcolor hover:bg-Fcolor hover:text-Scolor rounded-lg text-Fcolor text-3xl font-semibold font-work h-fit w-fit p-2 px-20">Cancel</button>
                                                 </div>
                                             </div>
                                     </div>
        }
        </>
    )
}