import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props){

    const navigate = useNavigate()

    return(
        <div className="w-fit py-8 font-work rounded-xl ">
            <img className="h-44" src={props.info.imgc}/>
            <div className="bg-Scolor text-Fcolor h-52 p-2 flex flex-col">
                 <div className="h-52 p-2">
                     <h1 className="font-semibold text-3xl">{props.info.fname}</h1>
                     <li className="list-image-[url(Location.svg)] text-Tcolor font-normal text-sm">{props.info.location}</li>
                     <h2 className="text-Tcolor font-normal text-pretty text-sm w-60">{props.info.about}</h2>
                </div>
                <div className="flex p-2 justify-between">
                    <div className="flex items-baseline">
                        <h1 className="font-semibold text-xl">{props.info.price}/</h1>
                        <p className="text-xs">per person</p>
                    </div>
                    {props.info.fname==="Ahmedabad" && <button onClick={()=>navigate("/Ahmedabad")} className="px-2 bg-Tcolor text-Scolor rounded-lg">Explore</button>}
                    {props.info.fname==="Mumbai" && <button onClick={()=>navigate("/Mumbai")} className="px-2 bg-Tcolor text-Scolor rounded-lg">Explore</button>}
                    {props.info.fname==="Kerala" && <button onClick={()=>navigate("/Kerala")} className="px-2 bg-Tcolor text-Scolor rounded-lg">Explore</button>}
                    {props.info.fname==="Leh" && <button onClick={()=>navigate("/Leh")} className="px-2 bg-Tcolor text-Scolor rounded-lg">Explore</button>}
                    {props.info.fname==="Haridwar" && <button onClick={()=>navigate("/Haridwar")} className="px-2 bg-Tcolor text-Scolor rounded-lg">Explore</button>}
                </div>
            </div>
        </div>
    )
}