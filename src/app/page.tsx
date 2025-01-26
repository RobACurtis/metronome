'use client'
import { BeatSelect } from "@/components/BeatSelect";
import { Bpm } from "@/components/BpmVisual";
import { MetronomeContext } from "@/components/MetronomeContext";
import { MetronomeVisual } from "@/components/MetronomeVisual";
import { PauseButton } from "@/components/PauseButton";
import { QuickSelect } from "@/components/QuickSelect";
import { MetronomeSlider } from "@/components/Slider";
import { TapIn } from "@/components/TapIn";
import { LazyMotion, domAnimation } from "framer-motion";


export default function Home() {
  return (
    <div>Hello world</div>
    // <LazyMotion features={domAnimation} strict>
    //   <MetronomeContext>
    //     <div className="flex h-full flex-col justify-between font-sans text-black dark:bg-slate-800 dark:text-white">
    //       <main className="flex h-full items-center justify-center p-1">
    //         <h1 className="sr-only">
    //           Metronome App - tempo, time signature, subdivision, practice
    //           percentage
    //         </h1>
    //         <div className="flex flex-col gap-4">
    //           <MetronomeVisual />
    //           <Bpm />
    //           <MetronomeSlider />
    //           <TapIn />
    //           <QuickSelect />
    //           <BeatSelect />
    //           <PauseButton />
    //         </div>
    //       </main>
    //     </div>
    //   </MetronomeContext>
    // </LazyMotion>
  );
}