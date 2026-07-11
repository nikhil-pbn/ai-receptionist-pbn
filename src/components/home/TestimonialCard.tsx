import { TestimonialCardProps } from "@/types/home";

export const TestimonialCard = ({
    quote,
    initials,
    name,
    company,
}: TestimonialCardProps) => {
    return (
        <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#1C1A2C] p-4 sm:p-8">
            <p className="flex-1 text-sm italic font-normal leading-9 text-white/75">
                &quot;{quote}&quot;
            </p>

            <div className="mt-4 sm:mt-10 flex items-center gap-4">
                <div className="flex size-9 items-center justify-center rounded-full bg-avatarGradient font-bold text-white">
                    {initials}
                </div>

                <div>
                    <h4 className="text-xbasel font-bold text-white">{name}</h4>
                    <p className="text-xs font-normal text-white/50">{company}</p>
                </div>
            </div>
        </article>
    );
};