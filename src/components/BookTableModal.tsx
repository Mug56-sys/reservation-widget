import { useState } from "react";
import PeopleNumberPopup from './PeopleNumberPopup'
import TimePopup from "./TimePopup";

export default function BookTableModal({
  setModalId,setHour,setPeopleOpt,setDay,day,HourOption,PeopleOpt
}: {
  setModalId: React.Dispatch<React.SetStateAction<number>>;
 setHour:React.Dispatch<React.SetStateAction<string>>;
 setPeopleOpt: React.Dispatch<React.SetStateAction<number>>;
 setDay:React.Dispatch<React.SetStateAction<string>>;
 day:string;
 HourOption:string;
 PeopleOpt:number;
}) {
 
  const [isPeopleHidden,setIsPeopleHidden]=useState<boolean>(false)
  const [isTimeHidden,setIsTimeHidden]=useState<boolean>(false)


  const handleClick = () => {
    setModalId(2);
  };


  return (
    <div className="size-100 text-3xl  m-3 flex  flex-col p-2">
      <p className="font-bold  mb-5">Book a table</p>
    
      <div onClick={()=>{setIsPeopleHidden(!isPeopleHidden)
        setIsTimeHidden(false)
      }}
        className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border cursor-pointer "
      >
        <i className="absolute left-3">People</i>
        <span className="mx-auto text-lg font-semibold">{PeopleOpt}</span>
        <PeopleNumberPopup isHidden={isPeopleHidden} setisHidden={setIsPeopleHidden} setPeopleOpt={setPeopleOpt} />
      </div>
      

      <div className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border ">
        <i className="absolute left-3">Date</i>
        <span className="mx-auto text-lg font-semibold"><input type="date" 
        className="cursor-pointer"
         value={day}
         onChange={(e)=>{
          console.log(e.target.value)
          setDay(e.target.value)
        }}/></span>
      </div>
      <div onClick={()=>{setIsTimeHidden(!isTimeHidden)
        setIsPeopleHidden(false)
      } }
      className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border cursor-pointer ">
        <i className="absolute left-3 ">Time</i>
        <span className="mx-auto text-lg font-semibold">{HourOption}</span>
       <TimePopup isTimeHidden={isTimeHidden} setIsTimeHidden={setIsTimeHidden} setHour={setHour}/> 
      </div>
      <button
        onClick={handleClick}
        className="border cursor-pointer  w-3/7  self-center text-white border-black rounded-xl bg-blue-500 justify-self-end p-2 mt-3"
      >
        Book Now
      </button>
    </div>
  );
}
