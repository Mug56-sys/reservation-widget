import PeopleOpt from './Options/PeopleOpt'
export default function PeopleNumberPopup({isHidden,setisHidden,setPeopleOpt}:{isHidden: boolean;setisHidden: React.Dispatch<React.SetStateAction<boolean>>;
setPeopleOpt:React.Dispatch<React.SetStateAction<number >>;
}) {
  const PeopleOptions=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={`${!isHidden ? 'hidden' : ''}  absolute border bg-white flex mt-32 w-1/2  z-10 grid grid-cols-5 grid-rows-2 gap-2 px-3 flex text-center justify-self-center p-2`}>
      {PeopleOptions.map((opt:number)=>{
        return <PeopleOpt key={opt} option={opt} setisHidden={setisHidden} setPeopleOpt={setPeopleOpt}/>
      })}
    
    </div>
  )
}
