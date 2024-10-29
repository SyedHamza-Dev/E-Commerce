  import "./Navbar.css";
  import Image from "next/image"; // Next.js' Image for optimized images
  import Link from "next/link"; 
  import logo from "../../../assets/images/logo.png";
  import cart from "../../../assets/images/cart_icon.png";
  import ShopCategory from '../../app/pages/shopcategory/page';
  import men_banner from "../../../assets/images/banner_mens.png";

  // import { ShopContext } from "../../context/Shopcontext"; // Ensure the correct case in the import
  // import { useContext } from "react";

  const Navbar = () => {
    // Use the context to get the total cart items
    // const { getTotalCartItems } = useContext(ShopContext); 

    return (
      <div className="navbar">
        <div className="nav-logo">
          <Image src={logo} alt="Brand Logo" width={50} height={50} />
          <p>Brand Store</p>
        </div>

        <ul className="nav-menu">
          <li>
            <Link href="/" element= {<ShopCategory banner = {men_banner} category = "men" />}>Shop</Link>
          </li>
          <li>
            <Link href="/mens">Men</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
          <li>
            <Link href="/kids">Kids</Link>
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link href="/login">
            <button>Login</button>
          </Link>
          <Link href="/cart">
            <Image src={cart} alt="Cart" width={30} height={30} />
          </Link>
          <div className="nav-cart-count"></div>
        </div>
      </div>
    );
  };

  export default Navbar;
