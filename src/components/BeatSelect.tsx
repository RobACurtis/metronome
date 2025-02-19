import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import React from "react";
import { cn } from "@/components/cn";
import { rhythmOptions } from "@/components/rhythmOptions";
import { useMetronomeContext } from "./MetronomeContext";

function groupBy<T>(items: T[], cb: (item: T) => string) {
  let result: Record<string, T[]> = {};
  for (const item of items) {
    const groupId = cb(item);
    if (result[groupId] === undefined) result[groupId] = [];
    result[groupId].push(item);
  }
  return result;
}

export const BeatSelect = () => {
  const { setBeats } = useMetronomeContext();
  return (
    <Select.Root
      onValueChange={(id) => {
        const option = rhythmOptions.find((ele) => ele.id === id);
        if (option === undefined) return;
        setBeats(option.metronomeBeats);
      }}
      defaultValue={rhythmOptions[0].id}
    >
      <Select.Trigger
        className="flex h-[35px] items-center justify-center gap-1 rounded border border-black  px-1 text-lg outline-none focus:border-amber-500 focus:shadow-[0_0_0_2px] focus:shadow-amber-500 data-[state=open]:bg-amber-500/10 data-[placeholder]:text-slate-400 hocus:bg-amber-500/10 dark:border-slate-700"
        aria-label="Beat Options"
      >
        <Select.Value placeholder="Select a rhythm..." className="flex-grow" />
        <Select.Icon className="font-bold" asChild>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="max-h-[--radix-select-content-available-height] w-[--radix-select-trigger-width] max-w-[--radix-select-content-available-width] overflow-hidden overflow-y-auto rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:bg-slate-900 dark:text-white"
          position="popper"
        >
          <Select.Viewport className="h-max !overflow-visible p-[5px] ">
            {Object.entries(
              groupBy(rhythmOptions, (val) => val.id.split("-")[0]),
            ).map(([group, values], index) => (
              <React.Fragment key={group}>
                {index !== 0 && (
                  <Select.Separator className="m-1 h-[1px] bg-black dark:bg-white" />
                )}
                <Select.Group>
                  <Select.Label className="px-6 text-xl">{group}</Select.Label>
                  {values.map((ele) => (
                    <SelectItem value={ele.id} key={ele.id}>
                      <div>{ele.itemLabel}</div>
                    </SelectItem>
                  ))}
                </Select.Group>
              </React.Fragment>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: Select.SelectItemProps & { value: string },
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Select.Item
        className={cn(
          "relative flex select-none items-center rounded px-6 py-1 text-base leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-amber-500/10 data-[highlighted]:outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
