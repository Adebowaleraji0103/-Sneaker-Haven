import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const navLinks = [
    { label: "HOME", href: "#banner" },
    { label: "SHOP", href: "#arrival" },
    { label: "ABOUT", href: "#about" },
    { label: "COLLECTION", href: "#collection" },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="relative flex justify-between items-center px-[1rem] py-6 w-full text-white font-semibold text-[16px] md:px-[6rem] scroll-smooth">
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
          {navLinks.map((Links, index) => (
            <li key={index} className="hover:text-[lightgrey] cursor-pointer">
              <a href={Links.href}>
                {Links.label}
                
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menuIsOpen && (
        <div className="fixed flex flex-row-reverse justify-between text-[14px] py-[2rem] px-[1rem] top-0 left-0 w-full h-[30rem] text-[#04251C] md:hidden">
          <IoMdClose
            onClick={() => setMenuIsOpen(false)}
            className="text-[24px] transition-all duration-300 " />

          <ul className="flex flex-col gap-[2rem]">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-[lightgrey] cursor-pointer">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
export default Navbar;
//bg-[#445243]
