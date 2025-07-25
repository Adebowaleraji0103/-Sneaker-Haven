function FooterImage() {
  return (
    <div className="mb-70 relative overflow-hidden">
      <img src="images/a.png" alt="footerimage" className="w-full md:h-[650px] md:object-cover" />

      <div className="flex flex-col gap-5 absolute px-[1rem] text-[20px] inset-0 text-white text-center items-center justify-center md:text-[25px] md:gap-10">
        <h1 className="text-[40px] leading-10 font-bold md:text-[70px] ">
          Get discount for membership
        </h1>
        <p className>
          Every membership will get a 40% discount for the first purchase
        </p>
        <button className="bg-white text-black text-[17px] rounded-[7px] px-6 py-2 font-bold mt-6 md:text-[21]">
          Join now
        </button>
      </div>
    </div>
  );
}
export default FooterImage;
