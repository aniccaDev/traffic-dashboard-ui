import Image from "next/image";
import VehicleTags from "./_cards/VehicleTags";
import { Frame, Frame_1 } from "../../../public";
import VehiclesClassification from "./_cards/VehiclesClassification";

export default function LiveFeed(
    {
        styles
    }:
    {
        styles?: string
    }
) {
    return (
        <div className={`bg-white border-black border-2 rounded-md p-4 my-4 ${styles}`}>
            <div className="flex flex-row justify-between">
                <VehicleTags styles="w-[25%]" />
                <VehiclesClassification styles="w-[73%]" />
            </div>
            <Image className="w-full mt-4" height={200} src={Frame} alt="Frame" />
        </div>
    );  
}