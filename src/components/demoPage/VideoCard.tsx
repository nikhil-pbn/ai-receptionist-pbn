
import { Card } from "@/components/ui";
import { ResumeIcon } from "@/icon";
import { VideoScenario } from "@/types/demoPage";

interface VideoCardProps {
    video: VideoScenario;
}

export const VideoCard = ({ video }: VideoCardProps) => {
    return (
        <Card className="overflow-hidden rounded-2xl border-white/10 bg-[#1A1926] p-0 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-muted-foreground/10">
            {/* Thumbnail */}

            <div className="group relative flex aspect-video cursor-pointer items-center justify-center border-b border-white/10 bg-[#242236]">
                <button className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-transparent backdrop-blur-3xl border border-border text-white shadow-lg transition group-hover:scale-110">
                    <ResumeIcon className="ml-1 h-7 w-7 fill-current" />
                </button>
            </div>

            {/* Body */}

            <div className="space-y-3 p-6">
                <h3 className="text-xl font-bold leading-tight text-white">
                    {video.id}. {video.title}
                </h3>

                <p className="leading-7 mb-8 text-white/70">
                    {video.description}
                </p>

                <ul className="space-y-2">
                    {video.callouts.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-[#8B4DFF]/75"
                        >
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};