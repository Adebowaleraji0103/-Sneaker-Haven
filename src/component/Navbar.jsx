function Navbar() {
  return (
    <header className="absolute flex">
      <div className="flex">
        <img src="images/adidas.png" alt="" />
        <h2>Smart shoe</h2>
      </div>

      <nav className="flex">
        <ol className="flex flex-col gap-1">
          <span className="w-[30px] h-[4px] block bg-black"></span>
          <span className="w-[30px] h-[4px] block bg-black"></span>
          <span className="w-[30px] h-[4px] block bg-black"></span>
        </ol>

        <ul className="hidden md:flex gap-4">
          <li>HOME</li>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>COLLECTION</li>
        </ul>

        <div>
          <img src="images/cart.png" alt="" />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
