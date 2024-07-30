function MetricsCard({ text }: { text: string }) {
    return (
        <div className="bg-[#F2F8FF] p-2 border-2 border-[#B6B6B6] rounded-md">
            <div className="border-b-2 border-b-black pb-2">
                <p className="font-semibold text-[20px] text-center">{ text }</p>
            </div>
            <p className="font-semibold text-[25px] text-center">2</p>
        </div>
    )
}

export default function SingularMetrics(
    {
        styles
    }:
    {
        styles?: string
    }
) {
    return (
        <div className={`p-4 my-4 bg-white rounded-md ${styles}`}>
            <h4 className="font-bold text-[24px]">Violations</h4>
            <div className="border-[1px] border-[#B6B6B6] mt-4 p-4 rounded-md flex flex-col gap-2">
                <MetricsCard text="Speed Violation" />
                <MetricsCard text="Signal Skip" />
                <MetricsCard text="Wrong Lane" />
                <MetricsCard text="Pedestrian Violation" />
            </div>
        </div>
    )
}