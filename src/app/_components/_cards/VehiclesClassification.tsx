function MiniTags() {
    return (
        <div className="w-fit border-2 rounded-md p-1 border-[#A0A0A0]">
            <p className="text-[#000000]">
                Buses:
                <span className="font-bold ml-2">12</span>
            </p>
        </div>
    );
}

export default function VehiclesClassification(
    {
        styles
    }:
        {
            styles?: string
        }
) {
    return (
        <div className={`rounded-md border-2 border-[#B6B6B6] py-2 px-4 bg-[#F2F8FF] flex flex-row items-center justify-between ${styles}`}>
            <p className="text-[#000000]">Vehicles Classification: </p>
            <div className="flex w-[70%] flex-row items-center justify-between">
                <MiniTags />
                <MiniTags />
                <MiniTags />
                <MiniTags />
            </div>
        </div>
    );
}