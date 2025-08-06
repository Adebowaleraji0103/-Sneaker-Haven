function NewArrival() {
  return (
    <div className="mb-[7rem] flex flex-col gap[2rem] px-[5px] md:px-[6rem]" id="arrival">
      <h1 className="text-[40px] font-bold text-center mb-[2rem] md:text-[49px] md:text-left">New Arrival</h1>
      <div className="w-full flex flex-col gap-[1rem] md:gap-[3rem] md:flex md:flex-row">
        <img src="images/newarrival (3).png" alt="" className="w-full" />
        <img src="images/newarrival (2).png" alt="" className="w-full" />
        <img src="images/newarrival (1).png" alt="" className="w-full" />
      </div>
    </div>
  );
}
export default NewArrival;
