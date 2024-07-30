'use client';

import Header from "./_components/Header";
import Image from "next/image";
import { arrow_down } from "../../public";
import LiveFeed from "./_components/LiveFeed";
import SingularMetrics from "./_components/SingularMetrics";

function LiveMetrics() {
  const displayDropdown = () => {
    const element = document.getElementById("dropdown");
    if (element?.classList.contains("hidden")) {
      element?.classList.remove("hidden");
    } else {
      element?.classList.add("hidden");
    }
  };

  return (
    <div className="bg-[#EEF3F9] py-2">
      <div className="mx-auto w-[95%] max-w-[1500px] flex flex-row items-center justify-between">
        <h3 className="text-[#000000] text-[24px] font-semibold">Live Metrics</h3>
        <div className="flex flex-row items-center gap-2 text-[18px] text-[#292929]">
          <label htmlFor="location-select" className="font-normal">Location: </label>
          <div className="ml-2 flex flex-row items-center gap-1">
            <div onClick={() => displayDropdown()} id="location-select" className="font-bold relative cursor-pointer">
              <span>Anil Kumble Circle</span>
              <div id="dropdown" className="absolute hidden mt-2 -left-[4rem] border-black border-2 rounded-md p-4 drop-shadow-lg bg-white">
                <span>MG Road</span>
                <span>Koramangala</span>
                <span>Opera House Bengaluru</span>
              </div>
            </div>
            <Image src={arrow_down} alt="select" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="bg-[#F2F8FF]">
        <LiveMetrics />
        <div className="w-[95%] max-w-[1500px] mx-auto flex flex-row justify-between">
          <LiveFeed styles="w-[70%]" />
          <SingularMetrics styles="w-[28%]" />
        </div>
      </main>
    </>
  );
}