import { useRef, useState } from "react";
import "./index.css";
import BookTablePage from "./components/BookTableModal";
import ContactDetailModal from "./components/ContactDetailModal"



function App() {
   let currentDate = new Date().toJSON().slice(0, 10)
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [show, setShow] = useState<boolean>(true);
  const [modalId,setModalId]=useState<number>(1);
  const [HourOption,setHour]=useState<string>('12:30')
  const [PeopleOpt,setPeopleOpt]=useState<number>(1)
  const [day,setDay]=useState<string>(currentDate)
  const [name,SetName]=useState<string>('')
  const [number,SetNumber]=useState<number>(0)

  const handleClick = () => {
    if (!dialogRef.current) return;
    setShow(!show);
    show ? dialogRef.current.showModal() : dialogRef.current.close();
  };
  const DetectOutsideClick=(e:React.MouseEvent<HTMLDialogElement, MouseEvent>)=>{
    if(!show || dialogRef.current){
      setShow(!show)
    e.target===dialogRef.current ? dialogRef.current.close() : null
    }
    
  }
  return (
    <div className="flex justify-center pt-10 ">
      <button
        className="bg-blue-500 text-white px-10 py-3 rounded-xl border cursor-pointer"
        onClick={handleClick}
      >
        Book a Table
      </button>
      <form id='reservation' onSubmit={(e)=>{
        e.preventDefault();
        setModalId(1)
        dialogRef.current?.close() 
      }}>
      <dialog ref={dialogRef} onClick={(e)=>DetectOutsideClick(e)} className="border rounded-xl self-center overflow-visible justify-self-center z-40 ">
        {modalId===1 ? <BookTablePage setModalId={setModalId} setHour={setHour} setPeopleOpt={setPeopleOpt} setDay={setDay} day={day} HourOption={HourOption} PeopleOpt={PeopleOpt}/> : null}
        {modalId===2 ? <ContactDetailModal SetName={SetName} number={number} SetNumber={SetNumber} PeopleOpt={PeopleOpt} day={day} name={name} HourOption={HourOption}/> : null}
        
        

      </dialog>
      </form>
    </div>
  );
}

export default App;
