"use client";

import { useState } from "react";

export default function NavBar2() {
  const [marker, setMarker] = useState("home");
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const set_marker = (value) => {
    setMarker(value);
    console.log(value);
  };
  return (
    <main className="">
      <div className=" shadow-[inset_0_0px_100px_1px_rgba(0,0,0,0.1)]  rounded-lg   p-2">
        <div className="flex flex-col w-full text-5xl font-bold text-black flex-row justify-items-end ">
          {marker == "home" ? (
            <div className="pr-10  pl-10 bg-[#211828] w-full scale-125 relative ">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"HOME"}
                  onClick={(e) => {
                    set_marker("home");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="pr-10 pl-10 bg-[#B12F48] w-full hover:scale-125 relative ">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"HOME"}
                  onClick={(e) => {
                    set_marker("home");
                  }}
                />
              </div>
            </div>
          )}
          {marker == "Project" ? (
            <div className="pr-10 pl-10 bg-[#211828] w-full scale-125 relative ">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"PORJECT"}
                  onClick={(e) => {
                    set_marker("Project");
                    scrollToSection("Projects");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="pr-10 pl-10  bg-[#B12F48]  w-full hover:scale-125 relative ">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"PROJECT"}
                  onClick={(e) => {
                    set_marker("Project");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
