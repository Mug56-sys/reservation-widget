import { useRef, useState } from "react";
import "./index.css";
import BookTablePage from "./components/BookTableModal";
import ContactDetailModal from "./components/ContactDetailModal"


function App() {
  
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [show, setShow] = useState<boolean>(true);
  const [modalId,setModalId]=useState<number>(1);

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
    <div className="flex justify-center pt-10">
      <button
        className="bg-blue-500 text-white px-10 py-3 rounded-xl border cursor-pointer"
        onClick={handleClick}
      >
        Book a Table
      </button>
      <form id='reservation' onSubmit={(e)=>{
        e.preventDefault();
        dialogRef.current?.close() 
      }}>
      <dialog ref={dialogRef} onClick={(e)=>DetectOutsideClick(e)} className="border rounded-xl self-center justify-self-center ">
        {modalId===1 ? <BookTablePage setModalId={setModalId}/> : null}
        {modalId===2 ? <ContactDetailModal  setModalId={setModalId}/> : null}
        
        

      </dialog>
      </form>
    </div>
  );
}

export default App;
