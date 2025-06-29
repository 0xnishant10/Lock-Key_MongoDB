import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white text-3xl text-center py-3 flex justify-between items-center px-10">
      <div className="flex items-center justify-center gap-2">
        <img src="/forgot.png" alt="" className="w-7" />
        <div>
          Lock
          <span className="text-blue-400">&</span>
          Key
        </div>
      </div>

      <a href="https://github.com/0xnishant10" target="_blank">
        <div className="text-sm p-1 flex items-center gap-3 border rounded-4xl">
          <img className="rounded-full w-7" src="icons/github.png" alt="" />
          <span>github</span>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
