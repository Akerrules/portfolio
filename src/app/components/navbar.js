"use client";
export default function NavBar() {
  return (
    <main className="">
      <div className="bg-white shadow-[inset_0_0px_100px_1px_rgba(0,0,0,0.1)]  rounded-full   p-2">
        <div className="flex w-full text-xl  text-black flex-row justify-items-end ">
          <div className="pr-10 pl-10 bg-black relative right-50 rounded-full">
            {" "}
            <div className=" text-white">
              <input type="button" value={"Home"} />
            </div>
          </div>
          <div className="pr-10 pl-10  relative rounded-full">
            {" "}
            <div className=" text-black">
              <input type="button" value={"Work"} />
            </div>
          </div>

          <div className="pr-10 pl-10  relative rounded-full">
            {" "}
            <div className=" text-black">
              <input type="button" value={"Project"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
