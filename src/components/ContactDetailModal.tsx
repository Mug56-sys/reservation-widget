export default function BookTablePage({
  setModalId
}: {
  setModalId:React.Dispatch<React.SetStateAction<number>>;
  
}) {
  return (
    <div className="size-100 text-2xl  m-3 flex  flex-col p-5">
      <p className="font-bold  mb-5">Contact Details</p>
      <div className="bg-blue-100 text-xl rounded-sm p-2 m-1">
        <p>You are making a reservation for <span className="font-bold">1 person</span>, on <span className="font-bold">4/17/2025</span> at <span className="font-bold">13:30</span></p>   
      </div>
      <div className="text-lg  mt-2">
        <p>Name</p>
        <input className="border border-gray-300 rounded-md w-full"/>
        <p>Phone Number</p>
        <input className="border border-gray-300 rounded-md w-full"/>
        <button  className="w-1/2 mt-5 p-2 bg-blue-500 text-white text-md cursor-pointer border  rounded-xl border-black text-nowrap">Confirm Reservation</button>
      </div>

    </div>
  );
}
