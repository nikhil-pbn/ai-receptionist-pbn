type ProblemStatsCardProps = {
    value: string;
    description: string;
};

export const ProblemStatsCard = ({
    value,
    description,
}: ProblemStatsCardProps) => {
    return (
        <div className="rounded-3xl border border-white/8 bg-[#1C1A2C] p-5 md:p-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
                {value}
            </h3>
            <p className="mt-3 md:mt-6 max-w-xs text-lg leading-9 text-white/60">
                {description}
            </p>
        </div>
    );
};