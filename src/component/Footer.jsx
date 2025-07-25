function Footer() {
  return (
    <div className="mb-70 flex flex-col justify-center text-center items-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-[22px] font-bold ">Shops</h1>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        <div>
          <h1 className="text-[22px] font-bold ">Connect</h1>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h1 className="text-[22px] font-bold ">Connect</h1>
          <p>hello.bright@gmail.com</p>
          <img src="images/adidas.png" alt="" />
        </div>
      </div>

      <div>
        <h1 className="text-[22px] font-bold ">Stay in touch</h1>
        <div>
          <p> Email address </p>
          <img src="images/Vector.png" alt="" />
        </div>
        <span className="bg-black h-[1px] inline-block w-[200px]"></span>
      </div>
    </div>
  );
}

export default Footer;
