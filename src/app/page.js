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
      <div className="absolute left-0 top-0 w-full bg-black  min-h-screen">
        <div className="flex  flex-col">
          <section className="  w-full bg-[#2E2A27] min-h-screen ">
            <div className="w-full bg-black absolute z-[1]">
              <Spline
                scene="https://prod.spline.design/xomL57AOhrDprJ2h/scene.splinecode"
                width={100}
                style={{ height: "100vh" }}
              />
            </div>
            <div className="absolute w-full z-[11]">
              <div className=" md:pl-10  flex w-full justify-center items-center lg:justify-start lg:items-start   ">
                <div className="flex flex-col  w-full  ">
                  <div className=" flex  justify-center items-center md:items-start flex-col w-full min-h-screen  ">
                    <h1 className="text-white md:text-[#EBB566]  text-5xl lg:text-8xl bg-blur   font-space ">
                      Aditya
                    </h1>
                    <h1 className="text-white md:text-[#B12F48]  text-5xl lg:text-8xl  font-space">
                      Kandel
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="Projects" className="h-full flex bg-black">
            ={" "}
            <Spline
              scene="https://prod.spline.design/6-H33DH1QBk-H4UG/scene.splinecode"
              width={100}
              style={{ height: "1500px" }}
            />
            <div className=" absolute z-12 w-full   flex w-full    ">
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
          {/* <section id="Projects" className="h-full flex ">
            <div
              className=" absolute z-12 w-full   flex w-full    "
              style={{
                background: "rgb(84,75,36)",
                backgroundImage:
                  "linear-gradient(211deg, rgba(101,78,47,1) 6%, rgba(34,34,34,1) 59%, rgba(42,43,43,1) 100%)",
              }}
            >
              <div className=" pl-10 flex flex-col  w-full  ">
                <div className="">
                  <div className="pt-10">
                    <Projects></Projects>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  );
}
