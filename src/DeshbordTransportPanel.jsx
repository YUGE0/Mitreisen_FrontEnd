import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "./FlightDetails"

export default function TransportPanel(prop){

    //console.log(prop.set)
    const navigate = useNavigate()
    const[da,setData] = useState([])
    const[flightsumdata,setFlightsumdata] = useState([])
    //const[flight,setFlight] = useState()
    const[trainsumdata,setTrainsumdata] = useState([])
    const[hotelsumdata,setHotelsumdata] = useState([])
    const[toursumdata,setToursumdata] = useState([])
    const[tourssumdata,setTourssumdata] = useState([])
    const[destinationsumdata,setDestinationsumdata] = useState([])
    const[userssumdata,setUserssumdata] = useState([])
    //console.log("Here"+flightsumdata.book);
    useEffect(()=>{
        fetchData()
        fetchFlightsum()
        fetchTrainsum()
        fetchHotelsum()
        fetchToursum()
        fetchTourssum()
        fetchDestinationsum()
        fetchUserssum()
    },[]) 

    const fetchData = async () => { 
        axios.get(`http://localhost:3000/get${prop.set}Data`).then(mb => setData(mb.data)).catch(er => console.log(er))
    }
    const fetchFlightsum = async () => { 
        const book = "Flight"
        const res = await axios.post(`http://localhost:3000/seFlightSummary`,{book})
        setFlightsumdata(res.data.count)
    }
    const fetchTrainsum = async () => { 
        const book = "Train"
        const res = await axios.post(`http://localhost:3000/seTrainSummary`,{book})
        setTrainsumdata(res.data.count)
    }
    const fetchHotelsum = async () => { 
        const book = "Hotel"
        const res = await axios.post(`http://localhost:3000/seHotelSummary`,{book})
        setHotelsumdata(res.data.count)
    }
    const fetchToursum = async () => { 
        const book = "Tour"
        const res = await axios.post(`http://localhost:3000/seFlightSummary`,{book})
        setToursumdata(res.data.count)
    }
    const fetchTourssum = async () => { 
        const res = await axios.get(`http://localhost:3000/seToursSummary`)
        setTourssumdata(res.data.count)
    }
    const fetchDestinationsum = async () => { 
        const res = await axios.get(`http://localhost:3000/seDestinationSummary`)
        setDestinationsumdata(res.data.count)
    }
    const fetchUserssum = async () => { 
        const res = await axios.get(`http://localhost:3000/seUsersSummary`)
        setUserssumdata(res.data.count)
    }



    // async () =>{
    //     const fname = fname;
    //     const desFrom = desFrom;
    //     const desTo = desTo;
    //     const departure = departure;
    //     const arrival = arrival;

    //     try {
    //         await axios.delete(`http://localhost:3000/del${prop.set}Data`, {fname, desFrom, desTo, departure, arrival});
    //         console.log('Data deleted successfully');
    //         alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
    //         fetchData();
    //       } catch (error) {
    //         console.error("Error deleting data:", error.message);
    //       }
    // }

    //const handleShow = async()

    //Flight Summary panel
    // const flightSumPanel = flightsumdata.map(i=>{return(
    //     <div className="p-10">
    //         <h1 className="">{i.book} bookin summary {flight}</h1>
    //     </div>
    // )})

    //Flight / Train panel
    const dashPanel = da.map(i=>{return(
        <div className="flex flex-wrap my-8 p-2 text-Scolor bg-Tcolor rounded-2xl font-work justify-between">
                <div className="flex">
                      <div className="flex p-2 flex-wrap justify-between">
                          <div className="px-20">
                              <h1 className="font-bold text-3xl">Departure</h1>
                              <h2 className="font-light text-2xl">{i.departure}</h2>
                              <h1 className="font-semibold text-2xl">{i.desFrom}</h1>
                          </div>

                          <div className="px-20">
                              <h1 className="font-bold text-3xl">Arrival</h1>
                              <h2 className="font-light text-2xl">{i.arrival}</h2>
                              <h1 className="font-semibold text-2xl">{i.desTo}</h1>
                          </div>
                      </div>
                    <div className="px-10 self-center">
                        <h1 className="px-10">{prop.set==="Flight" ? "Flight Name" : "Train Name"} : {i.fname}</h1>
                        <h1 className="px-10">Services : {i.services}</h1>
                        <h1 className="px-10">Duration : {i.duration}</h1>
                    </div>
                </div>
                <div className="border-l px-10 self-center">
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            const desFrom = i.desFrom;
                            const desTo = i.desTo;
                            const departure = i.departure;
                            const arrival = i.arrival;

                            console.log(JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/del${prop.set}Data`, {data:{ fname, desFrom, desTo, departure, arrival,}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Delete</button></div>
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            const desFrom = i.desFrom;
                            const desTo = i.desTo;
                            const departure = i.departure;
                            const arrival = i.arrival;

                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/ed${prop.set}Data`, {data:{ fname, desFrom, desTo, departure, arrival,}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Edit</button></div>
                </div>
            </div>
    )})

    //Hotel panel
    const hotelPanel = da.map(i=>{return(
        <div className="flex flex-wrap my-8 p-2 text-Scolor bg-Tcolor rounded-2xl font-work justify-between">
                <div className="flex justify-between">
                    <div className="flex p-2 flex-wrap">
                        <div className="px-20">
                            <h1 className="font-bold text-3xl">Location</h1>
                            <h1 className="font-semibold text-2xl">{i.desTo}</h1>
                        </div>
                    </div>
                    <div className="px-10 self-center w-full">
                        <h1 className="px-10">Hotel Name : {i.fname}</h1>
                        <h1 className="px-10 text-balance">Services : {i.services}</h1>
                    </div>
                </div>
                <div className="border-l px-10 self-center">
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            const desTo = i.desTo;

                            //console.log(JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/del${prop.set}Data`, {data:{ fname, desTo,}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Delete</button></div>
                    <div><button className="p-2 border-b-2 border-Fcolor w-full">Edit</button></div>
                </div>
            </div>
    )})

    //Destination panel
    const destinationPanel = da.map(i=>{return(
        <div className="flex my-8 p-2 text-Scolor bg-Tcolor rounded-2xl font-work justify-between">
                <div className="flex">
                      <div className="flex p-2 flex-wrap w-full">
                          <div className="px-20">
                              <h1 className="font-bold text-3xl">{i.fname}</h1>
                              <h1 className="font-semibold text-2xl">{i.location}</h1>
                          </div>
                      </div>
                    <div className="px-10 self-center w-full">
                        <h1 className="px-10">About : {i.about}</h1>
                        <h1 className="px-10">Per Person : {i.price}</h1>
                    </div>
                </div>
                <div className="border-l px-10 self-center">
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            //console.log(JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/del${prop.set}Data`, {data:{ fname,}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Delete</button></div>
                    <div><button className="p-2 border-b-2 border-Fcolor w-full">Edit</button></div>
                </div>
            </div>
    )})

    //Tours panel
    const tourPanel = da.map(i=>{return(
        <div className="flex flex-wrap my-8 p-2 text-Scolor bg-Tcolor rounded-2xl font-work justify-between">
                <div className="flex">
                      <div className="flex p-2 flex-wrap w-full">
                          <div className="px-20 space-y-5">
                              <h1 className=" font-medium text-lg">Tour Name : {i.fname}</h1>
                              <h1 className=" font-medium text-lg">City Name : {i.location}</h1>
                              <h1 className=" font-medium text-lg">Places : {i.place}</h1>
                          </div>
                      </div>
                    <div className="self-center p-2 w-full">
                        <h1 className="px-10 font-light text-wrap">About : {i.about}</h1>
                        <h1 className="px-10 font-medium text-xl">Per Person : {i.price}</h1>
                    </div>
                </div>
                <div className="flex gap-10 px-10 self-center">
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            //console.log(JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/del${prop.set}Data`, {data:{fname}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Delete</button></div>
                    <div><button className="p-2 border-b-2 border-Fcolor w-full">Edit</button></div>
                </div>
            </div>
    )})

    //Bookings panel
    const bookPanel = da.map(i=>{return(
        <div className="flex flex-wrap my-8 p-2 text-Scolor bg-Tcolor rounded-2xl font-work justify-between">
                <div className="flex w-fit gap-20">
                    <div className="self-center px-20">
                            <h1 className="font-medium py-2 text-2xl">Booked {i.book} </h1>
                            <h1 className="font-medium text-xl">Travelers : {i.traveler} </h1>
                            <h1 className="font-medium text-xl">Total Cost : {i.price} </h1>
                    </div>
                    <div className="flex px-20 flex-wrap">
                        <div className="p-10">
                            <h1 className="font-medium text-lg">Customer Name : {i.uname} </h1>
                            {i.book==="Flight" && <h1 className="font-medium">Flight name :</h1>}
                            {i.book==="Train" && <h1 className="font-medium">Train name :</h1>}
                            {i.book==="Hotel" && <h1 className="font-medium">Hotel name :</h1>}
                            {i.book==="Tour" && <h1 className="font-medium">Tour name :</h1>}
                            <h1 className=" font-light text-lg">{i.fname} </h1>
                        </div>
                    </div>
                </div>
                <div className=" px-10 self-center">
                    <div><button className="p-2 border-b-2 border-Fcolor w-full" onClick={
                        async () =>{
                            const fname = i.fname;
                            const book = i.book;
                            //console.log(JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                            try {
                                //await axios.delete(`http://localhost:3000/del${prop.set}Data`, JSON.stringify({"fname":fname, "desFrom":desFrom, "desTo":desTo, "departure":departure, "arrival":arrival}));
                                await axios.delete(`http://localhost:3000/del${prop.set}Data`, {data:{book,fname}});
                                //you have to define data as shown above otherwise it will pass empty object
                                console.log('Data deleted successfully');
                                //alert(prop.set+fname+desFrom+desTo+departure+arrival+"deleted");
                                fetchData();
                              } catch (error) {
                                console.error("Error deleting data:", error.message);
                              }
                        }
                    }>Delete</button></div>
                    <div><button className="p-2 border-b-2 border-Fcolor w-full">Edit</button></div>
                </div>
        </div>
    )})

    return(
        <div>
            {prop.set==="Flight" && dashPanel}
            {prop.set==="Train" && dashPanel}
            {prop.set==="Hotel" && hotelPanel}
            {prop.set==="Destination" && destinationPanel}
            {prop.set==="Tours" && tourPanel}
            {prop.set==="Booking" && bookPanel}
            {prop.set==="Summary" && 
            <div className="p-5">
                <div className="rounded-xl bg-Fcolor flex justify-around">
                        <img className="" src="logo.svg"/>
                    </div>
                <div className="h-full flex flex-wrap justify-between m-10">
                    <div className="p-10 rounded-xl shadow-md shadow-Tcolor w-fit"><h1 className="text-xl font-work font-light">Total</h1><h1 className="p-10 text-9xl font-semibold">{flightsumdata}</h1><h1 className=" text-xl font-work font-semibold">Flight Bookings</h1></div>
                    <div className="p-10 rounded-xl shadow-md shadow-Tcolor w-fit"><h1 className="text-xl font-work font-light">Total</h1><h1 className="p-10 text-9xl font-semibold">{trainsumdata}</h1> <h1 className=" text-xl font-work font-semibold">Train Bookings</h1></div>
                    <div className="p-10 rounded-xl shadow-md shadow-Tcolor w-fit"><h1 className="text-xl font-work font-light">Total</h1><h1 className="p-10 text-9xl font-semibold">{hotelsumdata}</h1> <h1 className=" text-xl font-work font-semibold">Hotel Bookings</h1></div>
                    <div className="p-10 rounded-xl shadow-md shadow-Tcolor w-fit"><h1 className="text-xl font-work font-light">Total</h1><h1 className="p-10 text-9xl font-semibold">{toursumdata}</h1><h1 className=" text-xl font-work font-semibold">Tour Bookings</h1></div>
                </div>
                <div className="mt-8 p-10 rounded-2xl shadow-lg shadow-Tcolor flex flex-wrap justify-around items-center">
                    <div className="w-fit">
                        <h1 className="p-1 border-b border-Fcolor text-xl font-semibold">Total Users : {userssumdata}</h1>
                        <h1 className="p-1 border-b border-Fcolor text-xl font-semibold">Total Destinations : {destinationsumdata}</h1>
                        <h1 className="p-1 border-b border-Fcolor text-xl font-semibold">Total Tours : {tourssumdata}</h1>
                    </div>
                    <div>
                        <button onClick={() => navigate("/")} className="mt-10 w-full rounded-md shadow-md shadow-Tcolor bg-Scolor text-Fcolor  hover:bg-Tcolor hover:text-Scolor font-semibold p-2 text-3xl">Home</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}