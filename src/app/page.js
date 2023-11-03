"use client";
import Blob from "./blob.js";
import Head from "next/head.js";
import NavBar from "./components/navbar.js";
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="z-10">
        <Blob />
      </div>

      <div className="absolute left-0 top-0 w-full  min-h-screen">
        <div className=" z-11 p-10  absolute flex w-full justify-end   ">
          <NavBar />
        </div>
        <div className="flex flex-col  min-h-screen  ">
          <div className=" flex items-center min-h-screen  justify-center ">
            <h1 className="text-black text-8xl ">Aditya Kandel</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
