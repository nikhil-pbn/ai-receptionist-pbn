type ProblemStatsCardProps = {
    value: string;
    description: string;
};

export const ProblemStatsCard = ({
    value,
    description,
}: ProblemStatsCardProps) => {
    return (
        <div className="rounded-3xl border border-foreground/8 bg-surface p-5 md:p-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-foreground">
                {value}
            </h3>
            <p className="mt-3 md:mt-6 max-w-xs text-lg leading-9 text-foreground/60">
                {description}
            </p>
        </div>
    );
};