import React,{useEffect,useState} from "react";
import Nav from "../NavBar";
import PPlace from "./Place";
import Tours from "./Tour";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Des(prop){

    //const d = new Date();

    const[dateFrom,setDateFrom] = useState("");
    const[traveler,setTraveler] = useState("");
    const[des,setDes] = useState([]);
    const[tours,setTour] = useState([]);
    const[pplace,setPplace] = useState([]);
    useEffect(()=>{
        fetchData();
        tourData();
        placeData();
    },[]) 

    //console.log(prop.p);
    const fetchData = async () => { 
        const fname = prop.p;
        console.log(fname);

        const res = await axios.post(`http://localhost:3000/seDestinationData`,{fname})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setDes(res.data)
    }
    const tourData = async () => { 
        const location = prop.p;
        const res = await axios.post(`http://localhost:3000/seToursData`,{location})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setTour(res.data)
    }
    const placeData = async () => { 
        const location = prop.p;
        const res = await axios.post(`http://localhost:3000/sePPlaceData`,{location})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setPplace(res.data)
    }


    //console.log(des.about);


    const navigate = useNavigate();

    //popular place
    const place = pplace.map(p =>{return(
        <div className="p-10 h-fit w-[32%]">
            <img className="w-full rounded-t-2xl border border-b-0 border-Fcolor hover:shadow-xl shadow-Fcolor" src={p.imgc}/>
            <div className="bg-Fcolor border-2 border-t-0 border-Fcolor rounded-b-2xl ">
                <div className="p-8 space-y-8">
                   <h1 className="text-3xl font-semibold font-inter text-Scolor">{p.fname}</h1>
                   <h2 className="text-xl text-pretty indent-10 text-left text-Scolor">{p.about}</h2>
                </div>
                <img className="w-full rounded-b-2xl border-Tcolor" src={p.map}/>
            </div>
        </div>
    )})

    //Tours
    const tour = tours.map(p =>{return(
        <div className="p-10 border-Fcolor h-fit w-[32%]">
            <div className="flex justify-between">
            <h1 className="text-3xl font-semibold font-inter text-Fcolor">{p.fname}</h1>
            <h1 className="text-xl font-semibold font-inter text-Tcolor">{p.price} per/person</h1>
            </div>
            <p className="text-xl text-pretty indent-10 text-left">{p.about}</p>
            <div className="pt-10 flex justify-between">
                <h1 className="text-3xl font-semibold font-inter text-Fcolor">{p.place}</h1>
                <button onClick={
                    function handelBook(){
                        const fname = p.fname;
                        //const traveler = flightData.traveler;
                        const loc = p.location;
                        const about = p.about;
                        const place = p.place
                        let price = p.price;
                        price = (price*traveler);
                        //const date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
                        //console.log(price);

                        navigate("/Book",{state:{book:"Tour",loc,fname,about,place,price,dateFrom,traveler}})
                    }
                } className="h-12 w-28 bg-Tcolor text-Scolor rounded-lg text-2xl">Book</button> 
            </div>
        </div>
    )})



    const Panel = des.map(i=>{return(
        <div>
            {i.fname==="Ahmedabad" &&
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Amd_Bg.png')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-70 text-Title font-inter font-bold self-center">{i.fname}</h1>
            </div>
            }
            {i.fname==="Mumbai" &&
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Mum_Bg.png')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-70 text-Title font-inter font-bold self-center">{i.fname}</h1>
            </div>
            }
            {i.fname==="Leh" &&
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Leh_Bg.png')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-70 text-Title font-inter font-bold self-center">{i.fname}</h1>
            </div>
            }
            {i.fname==="Haridwar" &&
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Hri_Bg.png')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-70 text-Title font-inter font-bold self-center">{i.fname}</h1>
            </div>
            }{i.fname==="Kerala" &&
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Krl_Bg.png')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-70 text-Title font-inter font-bold self-center">{i.fname}</h1>
            </div>
            }
            <div className="bg-Scolor text-Tcolor">
            <div className="p-10">
                <h1 className="text-8xl p-10 text-Fcolor font-semibold">{i.fname}</h1>
                <div className="p-10 flex gap-10">
                    <div className="w-[70%] space-y-10">
                    <h1 className="text-4xl font-medium">{i.about}</h1>
                    <p className="text-xl">{i.aboutext}</p>
                    </div>
                    <div>
                        <img src={i.imgo}/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <img className="p-10 w-fit" src={i.imgs}/>
                </div>
            </div>
            <div className="p-10">
            <div className="flex gap-40">
            <h1 className="text-8xl p-10 text-Fcolor font-semibold">Popular Places</h1>
            {prop.p==="Ahmedabad" && <img className="h-52 rounded-3xl border-2 border-Fcolor" src="Map_Amd.svg"/>}
            </div>
            <div className="flex flex-wrap justify-around">{place}</div>
                
            </div>
            <div className="p-10">
              <h1 className="text-8xl p-10 text-Fcolor font-semibold">Tours</h1>
              <div className="p-5 ml-10 border-b border-Fcolor w-fit">
                <input value={dateFrom} name="df" onChange={(e)=> setDateFrom(e.target.value)} className="bg-Scolor p-2 text-xl" type="date" placeholder="Add date"/>
                <input value={traveler} name="tv" onChange={(e)=> setTraveler(e.target.value)} className="bg-Scolor p-2 text-xl" type="number" placeholder="Add no of Traveler"/>
              </div>
              <div className="flex flex-wrap justify-between">{tour}</div>
            </div>
            <div className="bg-Fcolor text-Scolor p-10">
                <h1 className="text-8xl p-10 font-semibold">Accommodation</h1>
                <div className="p-10 flex gap-20">
                  <img className="h-96" src="Hotel.svg"/>
                  <div className="space-y-20">
                      <h2 className="text-2xl font-light">Book with us to elevate your stay in Ahmedabad,where we provide a broad choice of hotels to meet every traveller's interests. Our website offers a smooth and easy booking procedure for anything from expensive hotels with contemporary facilities to quaint boutique alternatives. Enjoy the ease of choosing lodgings that match your budget and desired experience, ensuring a comfortable and happy vacation in Ahmedabad's bustling metropolis.</h2>
                      <button onClick={
                        function handelBook(){
                            const desFrom = "";
                            const desTo = "";
                            const traveler = "";
                            const cla = "";
                            const trip = "";
                            const dateFrom = "";
                            const dateTo = "";

                            navigate("/HotelB",{state:{desFrom,desTo,traveler,cla,trip,dateFrom,dateTo}})
                        }
                      } className="p-5 px-10  bg-Tcolor text-Scolor text-5xl font-semibold rounded-lg">Book</button>
                  </div>
                </div>
            </div>
            </div>
        </div>
    )})



    return(
        <div>{Panel}</div>
    )
}