function About() {
  return (
    <div className="flex flex-col gap-6 px-[2rem] mb-[3rem] border-b-[lightgray] border-b pb-[4rem] md:mb-[5rem] md:pb-[7rem] md:flex md:flex-row-reverse md:justify-center md:items-center md:px-[5rem] md:gap-[10rem]" id="about">
      <div className="flex flex-col gap-6 font-semibold text-[18px] md:w-[400px]">
        <h1 className="text-[33px] text-center md:text-[18px] md:text-left">About us</h1>
        <h2 className="text-[38px] leading-13 font-bold ">
          We provide high quality shoes.
        </h2>
        <p>
          Step up your style with comfort. This shoe blends quality, durability,
          and sleek design perfect for any walk of life.
        </p>
        <button className="w-fit bg-black text-white py-2 px-4 rounded-[13px] font-semibold hover:bg-[white] hover:text-black hover:border hover:-scale-z-105">
          Explore more
        </button>
      </div>

      <div className="flex gap-3 ">
        <div className="flex flex-col gap-3 w-[50%]">
          <img src="images/heroshoe1.png" alt="heroshoe1" className="w-full h-1/2" />
          <img src="images/heroshoe2.png" alt="heroshoe2" className="w-full h-1/2"/>
        </div>
        <img src="images/heroshoe3.png" alt="heroshoe3" className="w-[50%] h-full" />
      </div>
    </div>
  );
}
export default About;
