import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <h2 className="navbar-title">Furniture</h2>
        <nav className="navbar-nav">
          <ul className="navbar--nav-ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
