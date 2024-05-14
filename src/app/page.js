"use client";
import Blob from "./blob.js";
import Head from "next/head.js";
import NavBar from "./components/navbar.js";
export default function Home() {
  return (
    <main className=" min-h-screen">
      <div className=" z-[11] p-10  absolute flex w-full justify-end   ">
        <NavBar />
      </div>
      <div className="absolute left-0 top-0 w-full   min-h-screen">
        <div className="flex  flex-col">
        <section className="w-full bg-white min-h-screen ">
          <div className="z-1">{/* <Blob /> */}</div>
          <div className="">
            <div className=" z-10 p-10  flex w-full justify-end   ">
              <div className="flex flex-col  w-full  ">
                <div className=" flex items-center  w-full min-h-screen justify-center ">
                  <h1 className="text-black text-8xl ">Aditya Kandel</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="h-full bg-stone-200">
            <div className=" z-11 p-10   flex w-full    ">
            {/* <div className=" flex items-center min-h-screen w-full  justify-center "> */}

              <h1 className="bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent text-4xl font-bold">Work</h1>
              </div>
              {/* </div> */}
        </section>
        <section id="Projects" className="bg-white">
            <div className=" z-11 p-10   flex w-full    ">
              <h1 className="bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent text-4xl font-bold ">Projects</h1>
            </div>
        </section>
      </div>
      </div>
    </main>
  );
}
