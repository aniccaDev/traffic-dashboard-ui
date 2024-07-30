export default function VehicleTags(
    { 
        styles 
    }: 
    {
        styles?: string
    }
) {
    return (
        <div className={`rounded-md border-2 w-fit flex flex-col justify-center border-[#B6B6B6] py-2 px-4 bg-[#F2F8FF] ${styles}`}>
            <p className="text-[#000000] text-center">
                Total no. of Vehicles:
                <span className="text-[#FF0000] ml-2 font-bold">188</span>
            </p>
        </div>
    );
}