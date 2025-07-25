function FooterImage() {
  return (
    <div className="mb-70 relative overflow-hidden">
        <img src="images/footerimage.png" alt="footerImage"/>
        
      <div className="flex flex-col gap-5 absolute top-0 text-white font-bold items-center">
        <h1>Get discount for membership</h1>
        <p>Every membership will get a 40% discount for the first purchase</p>
        <button>Join now</button>
      </div>
    </div>
  );
}
export default FooterImage;
