
export default function HourOpt({hour,setIsTimeHidden,setHour}:{hour:string;setIsTimeHidden:React.Dispatch<React.SetStateAction<boolean>>;setHour:React.Dispatch<React.SetStateAction<string>>;}) {
  return (
    <div
        
        className="border m-2 hover:bg-green-200"
        onClick={() => {
          setIsTimeHidden(false);
          setHour(hour);
        }}
      >
        {hour}
      </div>
  )
}
