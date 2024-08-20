import React from "react";
import Nav from "../NavBar";
import PPlace from "./Place";
import Tours from "./Tour";
import { useNavigate } from "react-router-dom";

export default function Krl(){

    const navigate = useNavigate();

    //popular place
    const place = PPlace.map(p =>{return(
        <div className="p-10 h-fit w-[32%]">
            <img className="w-full rounded-t-2xl border border-b-0 border-Fcolor hover:shadow-xl shadow-Fcolor" src={p.img}/>
            <div className="bg-Fcolor border-2 border-t-0 border-Fcolor rounded-b-2xl ">
                <div className="p-8 space-y-8">
                   <h1 className="text-3xl font-semibold font-inter text-Scolor">{p.name}</h1>
                   <h2 className="text-xl text-pretty indent-10 text-left text-Scolor">{p.Des}</h2>
                </div>
                <img className="w-full rounded-b-2xl border-t border-Tcolor" src={p.map}/>
            </div>
        </div>
    )})
    //Tours
    const tour = Tours.map(p =>{return(
        <div className="p-10 border-Fcolor h-fit w-[32%]">
            <div className="pb-2">
                <img className="w-full rounded-t-2xl border border-b-0 border-Fcolor hover:shadow-xl shadow-Fcolor" src={p.img}/>
            </div>
            <h1 className="text-3xl font-semibold font-inter text-Fcolor">{p.tourName}</h1>  
            <p className="text-xl text-pretty indent-10 text-left">{p.aboutTour}</p>
            <div className="pt-10 flex justify-between">
                <h1 className="text-3xl font-semibold font-inter text-Fcolor">{p.tourPlaces}</h1>
                <button className="h-12 w-28 bg-Tcolor text-Scolor rounded-lg text-2xl">Book</button> 
            </div>
        </div>
    )})


    return(
        <div>
            <div className="h-screen bg-fixed bg-cover bg-no-repeat bg-[url('/Krl_Bg.jpg')] flex flex-col">
                <Nav />
                <h1 className="mt-44 p-10 text-Scolor opacity-80 text-Title font-inter font-bold self-center">KERALA</h1>
            </div>
            <div className="bg-Scolor text-Tcolor">
            <div className="p-10">
                <h1 className="text-8xl p-10 text-Fcolor font-semibold">Kerala</h1>
                <div className="p-10 flex gap-10">
                    <div className="w-[70%] space-y-10">
                    <h1 className="text-4xl font-medium">Immerse yourself in the majesty of Kerala, where tropical jungle and seaside charm form a fascinating embrace.</h1>
                    <p className="text-xl">Kerala is a true treasure trove of both cultural and natural wonders. The state's rich culture is exemplified by the stunning artistry of Kathakali in Kochi, while the peaceful backwaters of Alleppey showcase its serene charm. With verdant tea plantations, lively traditions, and untouched coastlines, Kerala is an absolute must-see for anyone seeking to explore a land where centuries-old customs blend seamlessly with contemporary landscapes. Experience for yourself the captivating cultural vibrancy and breathtaking natural beauty of Kerala, a destination sure to leave you spellbound.</p>
                    </div>
                    <div>
                        <img src="Krl_Img_1.png"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                <img className="p-10 w-fit" src="Krl_Img_2.png"/>
                </div>
            </div>
            <div className="p-10">
            <div className="flex gap-40">
            <h1 className="text-8xl p-10 text-Fcolor font-semibold">Popular Places</h1>
            <img className="h-52 rounded-3xl border-2 border-Fcolor" src="Map_Amd.svg"/>
            </div>
            <div className="flex flex-wrap justify-around">{place}</div>
                
            </div>
            <div className="p-10">
              <h1 className="text-8xl p-10 text-Fcolor font-semibold">Tours</h1>
              <div className="flex flex-wrap justify-between">{tour}</div>
            </div>
            <div className="bg-Fcolor text-Scolor p-10">
                <h1 className="text-8xl p-10 font-semibold">Accommodation</h1>
                <div className="p-10 flex gap-20">
                  <img className="h-96" src="Hotel.svg"/>
                  <div className="space-y-20">
                      <h2 className="text-2xl font-light">Book with us to elevate your stay in Ahmedabad,where we provide a broad choice of hotels to meet every traveller's interests. Our website offers a smooth and easy booking procedure for anything from expensive hotels with contemporary facilities to quaint boutique alternatives. Enjoy the ease of choosing lodgings that match your budget and desired experience, ensuring a comfortable and happy vacation in Ahmedabad's bustling metropolis.</h2>
                      <button onClick={()=>navigate("/HotelB")} className="p-5 px-10  bg-Tcolor text-Scolor text-5xl font-semibold rounded-lg">Book</button>
                  </div>
                </div>
            </div>
            </div>
        </div>
    )
}