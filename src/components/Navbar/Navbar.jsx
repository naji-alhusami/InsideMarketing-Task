import { useState } from "react";
import { Link } from "react-router-dom";

import NavbarMobile from "./NavbarMobile";
import NavbarIcon from "./NavbarIcon";

import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="relative bg-white w-full h-[60px]  px-6 py-8 border-b border-gray-300 flex flex-row justify-between items-center">
      <Link to="#">
        <img src={Logo} alt="logo" className=" w-[220px] h-[20px]" />
      </Link>
      <NavbarIcon isToggled={isToggled} setIsToggled={setIsToggled} />
      <NavbarMobile isToggled={isToggled} />
    </nav>
  );
};

export default Navbar;
