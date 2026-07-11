import { aboutFeatures } from "@/constants/about";
import { Feature } from "@/components/about";

export const AboutFeaturesSection = () => {
    return (
        <>
            {aboutFeatures.map((item) => (
                <Feature
                    key={item.heading}
                    {...item}
                />
            ))}
        </>
    );
};