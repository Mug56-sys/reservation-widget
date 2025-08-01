import HourOpt from "./Options/HourOpt";

export default function TimePopup({
  isTimeHidden,
  setIsTimeHidden,
  setHour
}: {
  isTimeHidden: boolean;
  setIsTimeHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setHour:React.Dispatch<React.SetStateAction<string>>;
}) {
  const hoursAvaiable=['12:00','12:30','13:00','13.30','14:00','14:30','15:00']
  return (
    <div
      className={`${
        !isTimeHidden ? "hidden" : ""
      }  absolute bottom-full left-1/4 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 grid gap-2 p-3 text-center border h-40 overflow-y-scroll self-center`}
    >
      
      {hoursAvaiable.map((hour:string)=>{
        return <HourOpt key={hour} setIsTimeHidden={setIsTimeHidden} hour={hour} setHour={setHour}/>
      })

      }
     
    </div>
  );
}
