import clsx from "clsx";

export const RevenueCard = ({
  value,
  label,
  className,
  blue,
}: {
  value: string;
  label: string;
  className?: string;
  blue?: boolean;
}) => (
  <div
    className={clsx(
      "rounded-2xl border border-foreground/8 p-4 md:p-6",
      blue ? "bg-indigo-panel-2" : "bg-indigo-panel",
      className
    )}
  >
    <h3
      className={clsx(
        "text-3xl lg:text-6xl font-bold",
        blue ? "text-[#2f5fd0] dark:text-[#7EC9FF]" : "text-foreground"
      )}
    >
      {value}
    </h3>

    <p className="mt-2 text-sm text-foreground/45">
      {label}
    </p>
  </div>
);


export const Stat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div>
    <h3 className="text-3xl lg:text-5xl font-bold text-foreground">
      {value}
    </h3>

    <p className="mt-2 text-sm text-foreground/45">
      {label}
    </p>
  </div>
);

export const Slider = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) => (
  <div>
    <div className="mb-4 flex justify-between text-sm text-foreground/70">
      <span className="max-sm:text-wrap">{label}</span>
      <span className="font-semibold ml-2 text-brand">
        {value}%
      </span>
    </div>

    <input
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full accent-brand hover:accent-brand"
    />
  </div>
);