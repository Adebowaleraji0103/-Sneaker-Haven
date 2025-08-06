import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="relative flex justify-between items-center px-[1rem] py-6 w-full text-white font-semibold text-[16px] md:px-[6rem]">
      <div className="flex gap-2 md:gap-3 ">
        <img src="images/adidas.png" alt="" className="hidden md:block" />
        <h2 className="text-[16px] md:text-[25px]">Smart shoe</h2>
      </div>

      <nav className="flex gap-10  md:gap-[17rem] md:flex-row-reverse">
        <div>
          <img src="images/cart.png" alt="" className="size-[19px]" />
        </div>

        <ol className="flex flex-col gap-1 md:hidden">
          <LuMenu
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-[20px]"
          />
        </ol>

        <ul className="hidden md:flex gap-10">
          <a href="#banner">
            <li className="hover:text-[lightgrey] cursor-pointer">HOME</li>
          </a>
          <li className="hover:text-[lightgrey] cursor-pointer">SHOP</li>
          <li className="hover:text-[lightgrey] cursor-pointer">ABOUT</li>
          <li className="hover:text-[lightgrey] cursor-pointer"> COLLECTION</li>
        </ul>
      </nav>
      {menuIsOpen && (
        <div className="flex justify-between flex-row-reverse gap-[1.5rem] text-[14px] py-[2rem] px-[1rem] absolute top-0 left-0 w-[80%] h-[30rem] bg-[#445243] md:hidden">
          <IoMdClose
            onClick={() => setMenuIsOpen(false)}
            className="text-[24px] transition-all duration-300"
          />

         <ul>
           <a href="#banner">
            <li className="hover:text-[lightgrey] cursor-pointer">HOME</li>
          </a>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>COLLECTION</li>
         </ul>
        </div>
      )}
    </header>
  );
}
export default Navbar;
