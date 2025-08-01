import { useState } from "react";

export default function BookTablePage({
  SetName,
  number,
  SetNumber,
  name,
  PeopleOpt,
  day,
  HourOption
}: {
  SetName: React.Dispatch<React.SetStateAction<string>>;
  number: number;
  SetNumber: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  HourOption:string;
  day:string;
  PeopleOpt:number;
}) {
  
  return (
    <div className="size-100 text-2xl  m-3 flex  flex-col p-5">
      <p className="font-bold  mb-5">Contact Details</p>
      <div className="bg-blue-100 text-xl rounded-sm p-2 m-1">
        <p>
          You are making a reservation for{" "}
          <span className="font-bold">{PeopleOpt===1 ? '1 person' : `${PeopleOpt} people`}</span>, on{" "}
          <span className="font-bold">{day}</span> at{" "}
          <span className="font-bold">{HourOption}</span>
        </p>
      </div>
      <div className="text-lg  mt-2">
        <p>Name</p>
        <input
          className="border border-gray-300 rounded-md w-full"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <p>Phone Number</p>
        <input
        maxLength={15}
        
          className="border border-gray-300 rounded-md w-full"
          value={number || ''}
          onChange={(e) => {
              SetNumber(e.target.value=== '' ? 0 :Number(e.target.value))}}
        />
        <button className={`w-1/2 mt-5 p-2  text-white text-md cursor-pointer border  rounded-xl border-black text-nowrap 
          ${number===0 || name===''  ? 'pointer-events-none cursor-not-allowed bg-gray-300': 'bg-blue-500'}`}>
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
