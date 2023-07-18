import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow, true);
    return () => window.removeEventListener("scroll", handleShow, true);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 flex flex-row flex-wrap items-center justify-between w-screen px-8 py-4 ${
        show ? "bg-white" : "bg-transparent"
      } font-ubuntu`}
    >
      <div className={`${show ? "text-black" : "text-white"} font-roslindale`}>
        NSUOMNAM
      </div>
      <div className="hidden md:block">
        <ul className={`flex gap-12 ${show ? "text-black" : "text-white"} `}>
          <li className="cursor-pointer">History</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Trim</li>
          <li className="cursor-pointer">Map</li>
        </ul>
      </div>
      <div className="p-2 text-sm text-white rounded-sm bg-primaryButton">
        <button>Shopping Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
