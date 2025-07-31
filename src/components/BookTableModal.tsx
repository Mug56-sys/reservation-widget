export default function BookTableModal({
  setModalId,
}: {
  setModalId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleClick = () => {
    setModalId(2)
    console.log(`lol`);
  };
  return (
    <div className="size-100 text-3xl  m-3 flex  flex-col p-2">
      <p className="font-bold  mb-5">Book a table</p>
      <div className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border ">
        <i className="absolute left-3">People</i>
        <span className="mx-auto text-lg font-semibold">1</span>
      </div>
      <div className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border ">
        <i className="absolute left-3">Date</i>
        <span className="mx-auto text-lg font-semibold">04/07/2025</span>
      </div>
      <div className="relative grid grid-cols-1 items-center text-base bg-blue-100 rounded-lg py-2 px-3 my-1 border ">
        <i className="absolute left-3 ">Time</i>
        <span className="mx-auto text-lg font-semibold">13:30</span>
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
