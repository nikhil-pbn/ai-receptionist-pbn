interface Props {
  transcript: {
    speaker: string;
    text: string;
  }[];
}

export const Transcript = ({ transcript }: Props) => {
  return (
    <div className="mt-5 h-90 overflow-y-auto rounded-3xl border border-white/10 bg-transparent p-8">
      <div className="space-y-3">
        {transcript.map((line, index) => (
          <p
            key={index}
            className="text-base leading-9 text-accent-foreground/50"
          >
            <span className="font-bold text-white">
              {line.speaker}:
            </span>{" "}
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};