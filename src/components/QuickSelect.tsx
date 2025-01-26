import { useMetronomeContext } from "./MetronomeContext";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export function QuickSelect() {
  const { bpm, setBpm } = useMetronomeContext();
  const staticValues = [90, 100, 110, 120]; // Static speed values

  return (
    <ToggleGroup.Root
      className="flex w-full rounded"
      type="single"
      defaultValue={`${bpm}`}
      aria-label="Beats Per Minute Modifier"
      onValueChange={(val) => {
        if (val === "") return;
        const newValue = Number(val);
        if (!isNaN(newValue)) setBpm(newValue);
      }}
    >
      {staticValues.map((value) => (
        <ToggleGroup.Item
          key={value}
          value={`${value}`}
          aria-label={`${value} Speed`}
          className="flex grow items-baseline justify-center border-x-[.5px] border-y border-black px-3 py-1 text-lg first:rounded-l first:border-l last:rounded-r last:border-r hover:bg-amber-500/10 focus:z-10 focus:border-amber-500 focus:shadow-[0_0_0_2px] focus:shadow-amber-500 focus:outline-none data-[state=on]:bg-black data-[state=on]:text-white dark:border-slate-700 dark:focus:bg-amber-500/10"
        >
          <span>{value}</span>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
