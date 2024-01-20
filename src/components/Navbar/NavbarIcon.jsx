/* eslint-disable react/prop-types */
const NavbarIcon = ({ isToggled, setIsToggled }) => {
  function toggleButtonHandler() {
    setIsToggled(!isToggled);
  }

  return (
    <div
      className="relative inline-block cursor-pointer m-1.5 ml-4 p-2 z-2 md:hidden"
      onClick={toggleButtonHandler}
    >
      <div
        className={`w-[25px] h-[4px] bg-gray-200 transition duration-300 mb-1 ${
          isToggled ? "transform translate-y-2 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`w-[25px] h-[4px] bg-gray-200 transition duration-300 mb-1 ${
          isToggled ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-[25px] h-[4px] bg-gray-200 transition duration-300 mb-1 ${
          isToggled ? "transform translate-y-[-9px] -rotate-45 w-[25px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default NavbarIcon;
