function Footer() {
  return (
    <div className="flex flex-col gap-5 text-center pb-10 md:justify-between md:px-[8rem] md: md:flex-row" id="footer">
      <div className="flex flex-col gap-5 md:flex-row md:gap-[7rem]">
        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-bold ">Shops</h1>
          <ul className="flex flex-col gap-2 text-[14px] font-semibold">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-bold">Connect</h1>
          <ul className="flex flex-col gap-2 text-[14px] font-semibold">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-bold ">Connect</h1>
          <p className="flex flex-col gap-2 text-[14px] font-semibold">hello.bright@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-[22px] font-bold ">Stay in touch</h1>
        <div className="flex justify-center gap-[3rem] items-center">
          <p className="flex flex-col gap-2 text-[14px] font-semibold"> Email address </p>
          <img src="images/Vector.png" alt="" />
        </div>
        <span className="bg-black h-[1px] inline-block w-[200px]"></span>
      </div>
    </div>
  );
}

export default Footer;
