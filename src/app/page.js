"use client";
import Head from "next/head.js";
import NavBar from "./components/navbar.js";
import NavBar2 from "./components/navbar2.js";
import Projects from "./components/projects.js";

import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <div
        className=" z-[11] p-10 object-contain absolute flex w-full justify-end   "
        style={{
          backgroundImage: `url(${"."})`,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <div className="w-full absoulte z-[12]   ">
          <img src="/images/1.png" className=" w-full object-fill h-30"></img>
        </div> */}
        <NavBar2 />
      </div>
      <div className="absolute left-0 top-0 w-full   min-h-screen">
        <div className="flex  flex-col">
          <section className="  w-full bg-black min-h-screen ">
            <div className="w-full absolute z-[1]">
              <Spline
                scene="https://prod.spline.design/xomL57AOhrDprJ2h/scene.splinecode"
                width={100}
                style={{ height: "100vh" }}
              />
            </div>
            <div className="absolute z-[11]">
              <div className="  pl-10  flex w-full justify-end   ">
                <div className="flex flex-col  w-full  ">
                  <div className=" flex items-center  flex-col w-full min-h-screen justify-center ">
                    <h1 className="text-[#EBB566] text-8xl bg-blur  shadow-xl font-space ">
                      Aditya
                    </h1>
                    <h1 className="text-[#B12F48] text-8xl shadow-xl font-space">
                      Kandel
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="Projects" className="h-full flex bg-stone-200">
            <Spline
              scene="https://prod.spline.design/6-H33DH1QBk-H4UG/scene.splinecode"
              width={100}
              style={{ height: "100vh" }}
            />
            <div className=" absolute z-11 w-full   flex w-full    ">
              <div className=" pl-10 flex flex-col  w-full  ">
                <h1 className="text-[#B12F48] pl-1 w-full  pt-10 text-5xl  font-space rounded">
                  Projects
                </h1>

                <div className="">
                  <div className="pt-10">
                    <Projects></Projects>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
