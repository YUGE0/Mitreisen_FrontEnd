import React, { useState,useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Data from "./CardDetails";

export default function Dest(){

    const[des,setDes] = useState([]);

    useEffect(()=>{fetchData()},[]) 

    const fetchData = async () => { 
        try {
            const response = await axios.get(`http://localhost:3000/getDestinationData`);
            setDes(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }

    }

    //console.log(des)

    const element = des.map(d =>{return(<Card info={d}/>)})

    return(
        <div className="bg-Tcolor p-8 pb-0">
            <div className="font-inter font-medium text-5xl">Destination</div>
            <div className="flex flex-wrap justify-evenly">
            {element}
            </div>
        </div>
    )
}