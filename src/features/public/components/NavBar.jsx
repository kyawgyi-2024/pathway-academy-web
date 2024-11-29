import React from "react";

const NavBar = ({ text, path, origin }) => {
  return (
    <nav
      className={` 'h-10 p-2 md:h-0 md:p-0  items-center rounded-md   flex' ${
        path == origin
          ? "md:text-[#a4f4c5] bg-emerald-500 text-white md:bg-white font-bold"
          : "text-[#7F7D7D] font-semibold"
      }`}
    >
      {text}
    </nav>
  );
};

export default NavBar;
