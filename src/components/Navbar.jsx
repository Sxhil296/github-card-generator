import React from "react";
import CardDownloader from "./CardDownloader";


const Navbar = ({ title }) => {
 

  return (
    <nav className=" p-4 bg-gray-800 text-white">
      <div className="max-w-[880px] mx-auto flex items-center justify-between">
        <div>
          <span className="text-xl font-bold">{title}</span>
        </div>
        <div>
        <CardDownloader cardId="user-card-container" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
