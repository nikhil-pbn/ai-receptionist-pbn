import { Slider } from "@/components/home/RevenueCard";
import type { CalculatorValues } from "@/components/home/useRevenueCalculator";

interface CalculatorFormProps {
  values: CalculatorValues;
  setField: <K extends keyof CalculatorValues>(key: K, value: number) => void;
}

const inputClass =
  "h-14 w-full rounded-xl border border-foreground/10 bg-surface-3 px-5 text-foreground outline-none";

export const CalculatorForm = ({ values, setField }: CalculatorFormProps) => (
  <div className="space-y-8">
    <div>
      <label className="mb-3 block text-sm text-foreground/75">
        Average inbound calls per month
      </label>
      <input
        type="number"
        value={values.callsPerMonth}
        onChange={(e) => setField("callsPerMonth", Number(e.target.value))}
        step={10}
        min={0}
        className={inputClass}
      />
    </div>

    <Slider
      label="% calls that go unanswered"
      value={values.unansweredRate}
      setValue={(v) => setField("unansweredRate", v)}
    />

    <Slider
      label="% missed calls from new patients"
      value={values.newPatientRate}
      setValue={(v) => setField("newPatientRate", v)}
    />

    <Slider
      label="Appointment conversion when answered"
      value={values.conversionRate}
      setValue={(v) => setField("conversionRate", v)}
    />

    <div>
      <label className="mb-3 block text-sm text-foreground/75">
        Average first-visit value ($)
      </label>
      <input
        type="number"
        value={values.firstVisitValue}
        onChange={(e) => setField("firstVisitValue", Number(e.target.value))}
        min={0}
        step={10}
        className={inputClass}
      />
    </div>
  </div>
);
