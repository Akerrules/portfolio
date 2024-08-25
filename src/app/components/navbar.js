"use client";

import { useState } from "react";

export default function NavBar() {
  const [marker, setMarker] = useState("home");

  const set_marker = (value) => {
    setMarker(value);
    console.log(value);
  };
  return (
    <main className="">
      <div className="bg-[#B12F48] shadow-[inset_0_0px_100px_1px_rgba(0,0,0,0.1)]  rounded-lg   p-2">
        <div className="flex w-full text-2xl font-bold text-black flex-row justify-items-end ">
          {marker == "home" ? (
            <div className="pr-10 pl-10 bg-[#211828] relative rounded-lg">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Home"}
                  onClick={(e) => {
                    set_marker("home");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="pr-10 pl-10  relative rounded-lg">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Home"}
                  onClick={(e) => {
                    set_marker("home");
                  }}
                />
              </div>
            </div>
          )}
          {marker == "work" ? (
            <div className="pr-10 pl-10 bg-[#211828] relative rounded-lg">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Work"}
                  onClick={(e) => {
                    set_marker("work");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="pr-10 pl-10  relative rounded-full">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Work"}
                  onClick={(e) => {
                    set_marker("work");
                  }}
                />
              </div>
            </div>
          )}

          {marker == "project" ? (
            <div className="pr-10 pl-10 bg-[#211828] relative rounded-lg">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Project"}
                  onClick={(e) => {
                    set_marker("project");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="pr-10 pl-10  relative rounded-full">
              <div className=" text-[#EBB566]">
                <input
                  type="button"
                  value={"Project"}
                  onClick={(e) => {
                    set_marker("project");
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
