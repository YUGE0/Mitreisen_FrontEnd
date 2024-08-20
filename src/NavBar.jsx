import {React,useState} from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import './App'
import Amd from "./Info";
export default function Nav()
{
    //const location = useLocation();

    const[desFrom,setDesFrom]=useState("");
    const[desTo,setDesTo]=useState("");
    const[traveler,setTraveler]=useState("");
    const[dateFrom,setDateFrom]=useState("");
    const[dateTo,setDateTo]=useState("");
    const[cla,setCla]=useState("");
    const[trip,setTrip]=useState("");

    const navigate = useNavigate();
    function handelClick(){
        navigate("/Login")
    }
    const userToken = localStorage.getItem("userToken")
    const[currentLogin,setLogin] = useState(userToken !== null);
    //const lo = localStorage.getItem(userToken);
    //const[isLogin,setisLogin] = useState( )
    const[currentDst,setDst] = useState("");
    const[currentBooking,setBooking] = useState("");
    // 
    // <button onClick={()=>setLogin(true)}>Show</button>
    // <button onClick={()=>setLogin(false)}>hide</button>
    // <Link to="/Login">yo</Link>

    function handelNav(){
        //navigate(`/${currentDst}`) 
        // navigate(`/${currentBooking}`,{state:{book:"Flight",fname,desFrom,desTo,traveler,departure,arrival,cla,trip,price,date}})
    }
    
    return(
        <div className="flex bg-Fcolor bg-opacity-10 justify-between items-center text-2xl px-10 mb-3">
            <img className=" h-28" src="/logo.svg" alt="Mitreisen" />
            <div className="flex text-Scolor ml-96 gap-40 items-center">
                <Link to={"/"}>Home</Link>
                <Link to={"/About"}>About</Link>
            </div>
            {!currentLogin ? <button onClick={handelClick} className=" h-fit w-fit p-2 px-6 rounded-lg text-Scolor bg-Tcolor hover:bg-Scolor hover:text-Fcolor">Login</button> : null}
        </div>
    )
}
// {/* <select value={currentDst} onChange={e => setDst(e.target.value)} className="rounded bg-transparent">
//                     <option className="bg-Tcolor">Destinations</option>
//                     <option value={"Amd"} className="bg-Fcolor">Ahmedabad</option>
//                     <option value={"Bom"} className="bg-Fcolor">Mumbai</option>
//                     <option value={"Leh"} className="bg-Fcolor">Leh</option>
//                     <option value={"Sim"} className="bg-Fcolor">Simla</option>
//                     <option value={"Krl"} className="bg-Fcolor">Kerala</option>
//                     {/* {currentDst===`${currentDst}` && handelNav()} */}
//                     {/* {currentDst==="Back" && navigate("/")} */}
// </select> */}