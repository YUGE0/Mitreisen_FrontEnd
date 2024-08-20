import { React, useState } from "react";
import axios from "axios";
import DPanel from "./DeshbordTransportPanel";


export default function Admin()
{
    const[currentDashbord,setDashbord] = useState("Summary");
    const [addata, setAdddata] = useState(" ");
    const[] = useState("");
    //const[fname,setFname]=useState("")
    const[flightData,setFlightData]=useState({
        fname:"",
        desFrom:"",
        desTo:"",
        departure:"",
        arrival:"",
        cla:"",
        services:"",
        duration:"",
        price:"",
        about:"",
        location:"",
        place:"",
        url:"",
        aboutext:"",
        bg:"",
        imgo:"",
        imgs:"",
        imgc:"",
    });
    function handleChange(event) {
        const {name, value} = event.target
        setFlightData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const handleAdd = async (e) =>{
        const fname = flightData.fname;
        const desFrom = flightData.desFrom;
        const desTo = flightData.desTo;
        const departure = flightData.departure;
        const arrival = flightData.arrival;
        const cla = flightData.cla;
        const services = flightData.services; 
        const duration = flightData.duration;
        const price = flightData.price;
        const about = flightData.about;
        const location = flightData.location;
        const place = flightData.place;
        const url = flightData.url;
        const aboutext = flightData.aboutext;
        const bg = flightData.bg;
        const imgo = flightData.imgo;
        const imgs = flightData.imgs;
        const imgc = flightData.imgc;
        //setDashbord(prevcurrentDashbord=>{return(prevcurrentDashbord)})

        try {
            // Make a POST request to the server endpoint with data
            await axios.post(`http://localhost:3000/add${addata}Data`, { fname,desFrom,desTo,departure,arrival,cla,services,duration,price,about,location,place,url,aboutext,bg,imgo,imgs,imgc,});
            console.log('Data added successfully');
            //fetchData();
            setDashbord(addata)
          } catch (error) {
            console.error('Error adding data:', error.message);
          }
       
        console.log(flightData)
        }
    
    

    return(
        <div className="bg-Scolor font-inter">
            <div className="bg-Scolor flex justify-between px-20 p-5">
               <div className="p-2 space-x-6 flex">
                  <img className="p-2 border rounded-2xl border-Fcolor" src="Person.svg"/>
                  <div className="self-center">
                     <h1 className="text-Fcolor text-4xl font-semibold">{localStorage.getItem("userName")}</h1>
                     <h1 className="text-Tcolor text-xs font-normal">Manager</h1>
                  </div>
               </div>
               <div className="self-center flex space-x-10">
                 {currentDashbord!=="Summary" && <button onClick={()=>setDashbord("Summary")} className="p-3 shadow-sm bg-Fcolor shadow-Scolor focus:bg-Tcolor">Summary</button>}
                 <input className="bg-Fcolor text-xl p-2 w-full" placeholder="Search"/>
                 <button className="bg-Tcolor px-10">Serch</button>
               </div>
            </div>
            <div className="flex space-x-16">
               <div className="p-10 rounded-tr-2xl bg-Fcolor">
                   <div className="text-2xl flex flex-col self-center font-medium space-y-10 h-full">
                    <button onClick={()=>setDashbord("Flight")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Flights</button>
                    <button onClick={()=>setDashbord("Train")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Trains</button>
                    <button onClick={()=>setDashbord("Hotel")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Hotels</button>
                    <button onClick={()=>setDashbord("Destination")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Destinations</button>
                    <button onClick={()=>setDashbord("Tours")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Tours</button>
                    <button onClick={()=>setDashbord("Booking")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Bookings</button>
                    <button onClick={()=>setDashbord("Journal")} className="p-5 shadow-sm shadow-Scolor w-full focus:bg-Tcolor">Journey Journal</button>
                   </div>
               </div>
               <div className="p-10 border-t-4 w-full text-Tcolor">
                   <div className="flex justify-between">
                       <h1 className="text-2xl font-semibold">{currentDashbord !== "AddData" && currentDashbord} Dashboard</h1>
                       {currentDashbord === "AddData" ? <div onClick={()=>setDashbord("Summary")} className="self-center px-8 border-b-2 border-Fcolor hover:[bg-Fcolor]" >Back</div> : <div onClick={()=>setDashbord("AddData")} className="self-center px-8 border-b-2 border-Fcolor hover:[bg-Fcolor]" >Add</div>}
                   </div>
                   <div>
                    {currentDashbord === "Summary" && <DPanel set={"Summary"}/>}
                    {currentDashbord === "Flight" && <DPanel set={"Flight"}/>}
                    {currentDashbord === "Train" && <DPanel set={"Train"}/>}
                    {currentDashbord === "Hotel" && <DPanel set={"Hotel"}/>}
                    {currentDashbord === "Journal" && <DPanel/>}
                    {currentDashbord === "Destination" && <DPanel set={"Destination"}/> }
                    {currentDashbord === "Tours" && <DPanel set={"Tours"}/>}
                    {currentDashbord === "Booking" && <DPanel set={"Booking"}/> }
                    {currentDashbord === "AddData" && <add className="p-10 flex flex-col border-2 rounded-3xl w-full gap-5">
                                                          <h1 className="font-bold text-3xl">Add new data </h1>
                                                          <label>
                                                            Choose to add data in :{' '}
                                                            <select className="text-xl bg-transparent" value={addata} onChange={e => setAdddata(e.target.value)}>
                                                              <option className=" bg-Fcolor text-Scolor" value=" ">Select</option>
                                                              <option className="" value="Flight">Flight</option>
                                                              <option className="" value="Train">Train</option>
                                                              <option className="" value="Hotel">Hotel</option>
                                                              <option className="" value="Destination">Destination</option>
                                                              <option className="" value="Tours">Tours</option>
                                                              <option className="" value="PPlace">Popular Place</option>
                                                            </select>
                                                          </label>
                                                          {addata==="Hotel" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Name"/>}
                                                          {addata==="Hotel" && <input name="desTo" value={flightData.desTo} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="CityName"/>}
                                                          {addata==="Hotel" && <input name="services" value={flightData.services} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Services"/>}
                                                          {addata==="Hotel" && <input name="price" value={flightData.price} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Price Per Night"/>}
                                                          {addata==="Hotel" && <input name="url" value={flightData.url} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="url for img / img name"/>}

                                                          {addata==="Flight" && <input name="url" value={flightData.url} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="url for img / img name"/>}
                                                          {addata==="Flight" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Name"/>}
                                                          {addata==="Flight" && <input name="desFrom" value={flightData.desFrom} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Destination From"/>}
                                                          {addata==="Flight" && <input name="desTo" value={flightData.desTo} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Destination To"/>}
                                                          {addata==="Flight" && <input name="departure" value={flightData.departure} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Departure"/>}
                                                          {addata==="Flight" && <input name="arrival" value={flightData.arrival} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Arrival"/>}
                                                          {addata==="Flight" && <input name="services" value={flightData.services} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Services"/>}
                                                          {addata==="Flight" && <input name="cla" value={flightData.cla} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Class"/>}
                                                          {addata==="Flight" && <input name="duration" value={flightData.duration} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Duration"/>}
                                                          {addata==="Flight" && <input name="price" value={flightData.price} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Price"/>}

                                                          {addata==="Train" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Name"/>}               
                                                          {addata==="Train" && <input name="desFrom" value={flightData.desFrom} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Destination From"/>}
                                                          {addata==="Train" && <input name="desTo" value={flightData.desTo} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Destination To"/>}
                                                          {addata==="Train" && <input name="departure" value={flightData.departure} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Departure"/>}
                                                          {addata==="Train" && <input name="arrival" value={flightData.arrival} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Arrival"/>}
                                                          {addata==="Train" && <input name="services" value={flightData.services} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Services"/>}
                                                          {addata==="Train" && <input name="cla" value={flightData.cla} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Class"/>}
                                                          {addata==="Train" && <input name="duration" value={flightData.duration} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Duration"/>}
                                                          {addata==="Train" && <input name="price" value={flightData.price} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Price"/>}

                                                          {addata==="Destination" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="City Name"/>}
                                                          {addata==="Destination" && <input name="location" value={flightData.location} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Location"/>}
                                                          {addata==="Destination" && <input name="about" value={flightData.about} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="about"/>}
                                                          {addata==="Destination" && <textarea name="aboutext" value={flightData.aboutext} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="more About"/>}
                                                          {addata==="Destination" && <input name="bg" value={flightData.bg} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Background img"/>}
                                                          {addata==="Destination" && <input name="imgo" value={flightData.imgo} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Img url"/>}
                                                          {addata==="Destination" && <input name="imgs" value={flightData.imgs} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Img url"/>}
                                                          {addata==="Destination" && <input name="imgc" value={flightData.imgc} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Card img url"/>}
                                                          {addata==="Destination" && <input name="price" value={flightData.price} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Price Per Person"/>}

                                                          {addata==="Tours" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Tour Name"/>}
                                                          {addata==="Tours" && <input name="location" value={flightData.location} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Location"/>}
                                                          {addata==="Tours" && <textarea name="about" value={flightData.about} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="About" type="" />}
                                                          {addata==="Tours" && <input name="place" value={flightData.place} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Places"/>}
                                                          {addata==="Tours" && <input name="price" value={flightData.price} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Price Per Person"/>}

                                                          {addata==="PPlace" && <input name="fname" value={flightData.fname} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Place Name"/>}
                                                          {addata==="PPlace" && <input name="location" value={flightData.location} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Location"/>}
                                                          {addata==="PPlace" && <textarea name="about" value={flightData.about} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="About" type="" />}
                                                          {addata==="PPlace" && <input name="imgc" value={flightData.imgc} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Card img url"/>}
                                                          {addata==="PPlace" && <input name="imgs" value={flightData.imgs} onChange={handleChange} className="bg-Fcolor p-2 text-Scolor" placeholder="Location img Url"/>}
                                                          <button onClick={handleAdd} className="bg-Tcolor p-2 px-20 w-fit text-Scolor">Add</button>  
                                                      </add> }
                   </div>
               </div>
            </div>
        </div>
    )
}