import Image from "next/image";
import { av_logo } from "../../../public";

export default function Header() {
    return (
        <header className="bg-white">
            <div className="w-[95%] py-4 max-w-[1500px] mx-auto flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <Image height={80} width={80} src={av_logo} alt="Anicca Vision Traffic Analytics" />
                    <h1 className="text-[#1C1D53]">
                        <span style={{ textShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="font-bold drop-shadow-textShadow p-0 text-[25.08px]">Anicca Vision</span>
                        <br />
                        <span className="font-semibold p-0 text-[19.26px]">Traffic Analytics</span>
                    </h1>
                </div>
                <h2 className="text-[#000000] filter-none drop-shadow-2xl font-semibold text-[30.25px]">
                    Traffic Analytics Demo Dashboard
                </h2>
            </div>
        </header>
    );
}