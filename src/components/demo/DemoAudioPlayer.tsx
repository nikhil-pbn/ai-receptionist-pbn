"use client";

import { ResumeIcon } from "@/icon";
import { Pause } from "lucide-react";
  import { useRef, useState } from "react";

interface DemoAudioPlayerProps {
  title: string;
  voice: string;
  duration: string;
  audio: string;
}

export const DemoAudioPlayer = ({
  title,
  voice,
  duration,
  audio,
}: DemoAudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audio}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={() => {
          if (!audioRef.current) return;

          setProgress(
            (audioRef.current.currentTime /
              audioRef.current.duration) *
              100
          );
        }}
      />

      <div className="rounded-3xl border border-foreground/10 bg-transparent p-5">
        <div className="flex gap-5">
          <button
            onClick={toggle}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-transparent border border-border text-foreground"
          >
            {playing ? (
              <Pause className="fill-current" />
            ) : (
              <ResumeIcon className="ml-1 fill-current" />
            )}
          </button>

          <div className="flex-1">
            <h4 className="font-bold text-foreground">
              {title}
            </h4>

            <p className="text-sm text-foreground/50">
              {voice} · {duration}
            </p>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};