export default function HourOpt({
  setisHidden,
  option,setPeopleOpt
}: {
  setisHidden: React.Dispatch<React.SetStateAction<boolean>>;
  option: number;
  setPeopleOpt: React.Dispatch<React.SetStateAction<number >>;
}) {
  return (
    <div
      className="border hover:bg-green-200"
      onClick={() => {
        setisHidden(false);
        setPeopleOpt(option);
      }}
    >
      {option}
    </div>
  );
}
