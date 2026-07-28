import { SUGGESTED_PROMPTS } from "@/constants/demo";

export const SuggestedPrompts = () => {
  return (
    <section className="py-10 w-full">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[1px] text-[#8B4DFF]">
            Suggested Prompts to Try
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <div
              key={prompt.id}
              className="rounded-2xl border border-foreground/10  px-6 py-5 transition-all duration-300 hover:border-primary/40"
            >
              <p className="text-sm font-medium leading-[1.1] text-foreground">
                {prompt.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};