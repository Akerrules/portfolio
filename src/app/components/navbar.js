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
      <div className="bg-white shadow-[inset_0_0px_100px_1px_rgba(0,0,0,0.1)]  rounded-full   p-2">
        <div className="flex w-full text-xl  text-black flex-row justify-items-end ">
          {marker == "home" ? (
            <div className="pr-10 pl-10 bg-black relative rounded-full">
              <div className=" text-white">
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
            <div className="pr-10 pl-10  relative rounded-full">
              <div className=" text-black">
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
            <div className="pr-10 pl-10 bg-black relative rounded-full">
              <div className=" text-white">
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
              <div className=" text-black">
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
            <div className="pr-10 pl-10 bg-black relative rounded-full">
              <div className=" text-white">
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
              <div className=" text-black">
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
