function FooterImage() {
  return (
    <div className="mb-70 relative overflow-hidden" >
        <img src="images/a.jpg" alt="footerimage" className="w-full "/>

      <div className="flex flex-col gap-5 absolute top-0 inset-0 text-white font-bold text-center items-center justify-center ">
        <h1 className="text-[40px]">Get discount for membership</h1>
        <p>Every membership will get a 40% discount for the first purchase</p>
        <button>Join now</button>
      </div>
    </div>
  );
}
export default FooterImage;
