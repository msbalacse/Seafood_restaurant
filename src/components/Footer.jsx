import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#151515] p-8 flex flex-wrap flex-row justify-evenly gap-8">
      <div className="w-[100px]">
        <ul className="flex flex-col gap-8">
          <div className={`font-roslindale text-white`}>NSUOMNAM</div>
          <div>
            <li>10.00PM</li>
            <li>E138°00'N36°00'</li>
          </div>
        </ul>
      </div>

      <div className="w-[100px]">
        <ul className="flex flex-col gap-4 text-white">
          <li>History</li>
          <li>Menu</li>
          <li>Trip</li>
          <li>Map</li>
        </ul>
      </div>

      <div className="w-[100px]">
        <ul className="flex flex-col gap-4 text-black">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>
      </div>

      <div className="w-[100px]">
        <ul className="flex flex-col gap-4 text-black">
          <div className="p-2 text-sm text-white rounded-sm w-fit bg-primaryButton">
            <button>Shopping Cart</button>
          </div>
          <li>
            Thank_You_Message <br />
            Emperor Restaurant
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
