import React,{useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TrainS from "./TrainS";
import Data from "./TrainDetails";
import Nav from "./NavBar";

export default function TrainBook()
{
    const location = useLocation();
    const navigate = useNavigate();


    const[trainData,setTrainData]=useState({
        desFrom:location.state.desFrom,
        desTo:location.state.desTo,
        traveler:location.state.traveler,
        dateFrom:location.state.dateFrom,
        dateTo:location.state.dateTo,
        cla:location.state.cla,
        trip:location.state.trip,
    });

    console.log(trainData.cla);

    const[data,setData] = useState([])
    useEffect(()=>{fetchData()},[]) 

    const fetchData = async () => { 
        const desFrom = trainData.desFrom;
        const desTo = trainData.desTo;
        const cla = trainData.cla;
    
        const res = await axios.post(`http://localhost:3000/seTrainData`,{desFrom,desTo,cla})
        //.then(mb => setData(mb.data) ).catch(er => console.log(er))
        setData(res.data)
        console.log(res.data)
    }

    //const[selection,setSelection] = useState("SLEEPER")
    // console.log(selection)

    const trainPanel = data.map(i=>{return(
        <div className=" my-8 p-10 bg-Scolor text-Fcolor rounded-2xl font-work justify-between">
                <div className="">
                    <div className="flex flex-wrap justify-around items-center">
                          <div className="text-4xl p-10 rounded-xl font-bold shadow-md shadow-Fcolor">{i.fname}</div>
                          <div className="p-10 flex items-baseline">
                              <div className="p-5 ">
                                  <h2 className="font-light text-3xl">{i.departure}</h2>
                                  <h1 className="font-semibold text-3xl">{i.desFrom}</h1>
                              </div>
                              <div className="rounded-xl p-2 px-5 shadow-md shadow-Fcolor self-center">
                                  <h2 className="text-xl">{i.duration}</h2>
                              </div>
                              <div className="p-5">
                                  <h2 className="font-light text-3xl">{i.arrival}</h2>
                                  <h1 className="font-semibold text-3xl">{i.desTo}</h1>
                              </div>
                          </div>
                          <div className="p-10 flex gap-20">
                            <div className="h-fit rounded-xl w-fit shadow-md shadow-Fcolor p-2 px-20">
                              <h1 className=" text-xl font-inter font-normal">{i.price} Rs.</h1>
                              <h1 className=" text-xl font-inter font-normal">Class: {i.cla}</h1>
                            </div>
                            <div className="w-fit"><button onClick={
                                function handelBook(){
                                    const fname = i.fname;
                                    const desFrom = i.desFrom;
                                    const desTo = i.desTo;
                                    const traveler = trainData.traveler;
                                    const departure = i.departure;
                                    const arrival = i.arrival;
                                    const cla = i.cla;
                                    const trip = i.trip;
                                    let price = i.price;
                                    price = (price*traveler);
                                    const dateFrom = trainData.dateFrom    ;
                                    const dateTo = trainData.dateTo;       
                                    if(localStorage.getItem("userToken")!==null){
                                        navigate("/Book",{state:{book:"Train",fname,desFrom,desTo,traveler,departure,arrival,cla,trip,price,dateFrom,dateTo}})
                                    }
                                    else{
                                        navigate("/Login")
                                    }
                                    
                                }
                            } className=" shadow-md shadow-Fcolor rounded-xl p-3 w-full font-semibold text-3xl">Book</button></div>
                          </div>
                    </div>
                </div>    
            </div>
    )})
    return(
        <div className="px-20">
            <Nav/>
            <div className="font-work flex flex-col flex-wrap justify-around">
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-t from-Scolor from-40% to-Fcolor">Book</div>
                <div className="text-big font-bold grad bg-clip-text text-transparent bg-gradient-to-b from-Scolor from-50% to-Fcolor place-self-end">Train</div>
            </div>
            <TrainS df={trainData.desFrom} dt={trainData.desTo} tr={trainData.traveler} daf={trainData.dateFrom} dat={trainData.dateTo} cl={trainData.cla} tp={trainData.trip}/>
            {data.length===0 ?<div className="my-10 flex"><img className="w-1/2 " src="NotFound.svg"/><h1 className="text-8xl font-bold">No Data</h1></div> : trainPanel}
        </div>
    )
}
