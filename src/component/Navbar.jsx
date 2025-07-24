function Navbar() {
  return (
    <header className="absolute flex justify-between w-full text-white font-bold text-[18px]">
      <div className="flex gap-3">
        <img src="images/adidas.png" alt="" />
        <h2>Smart shoe</h2>
      </div>

      <nav className="flex gap-20 ">
        <ol className="flex flex-col gap-1 md:hidden">
          <span className="w-[30px] h-[4px] block bg-white"></span>
          <span className="w-[30px] h-[4px] block bg-white"></span>
          <span className="w-[30px] h-[4px] block bg-white"></span>
        </ol>

        <ul className="hidden md:flex gap-4">
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>COLLECTION</li>
        </ul>

      </nav>
        <div>
          <img src="images/cart.png" alt="" />
        </div>
    </header>
  );
}
export default Navbar;
