function Navbar() {
  return (
    <header className="absolute flex justify-between px-[1rem] w-full text-white font-bold text-[16px] py-4 md:px-[6rem]">
      <div className="flex gap-3">
        <img src="images/adidas.png" alt="" />
        <h2>Smart shoe</h2>
      </div>

      <nav className="flex gap-10  md:gap-[17rem] md:flex-row-reverse">
        <div>
          <img src="images/cart.png" alt="" />
        </div>

        <ol className="flex flex-col gap-1 md:hidden">
          <span className="w-[30px] h-[4px] block bg-white"></span>
          <span className="w-[30px] h-[4px] block bg-white"></span>
          <span className="w-[30px] h-[4px] block bg-white"></span>
        </ol>

        <ul className="hidden md:flex gap-10">
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>COLLECTION</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
