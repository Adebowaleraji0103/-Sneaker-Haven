function Navbar() {
  return (
    <header className="absolute">
      <div>
        <img src="images/adidas.png" alt="" />
        <h2>Smart shoe</h2>
      </div>

      <nav>
        <ol>
          <span></span>
          <span></span>
          <span></span>
        </ol>

        <ul>
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
