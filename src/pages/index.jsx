import { AboutSection } from "@/components/Templates/AboutSection";
import { HeroSection } from "@/components/Templates/HeroSection";
import { PartenerSection } from "@/components/Templates/PartenerSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <PartenerSection />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            //
        },
    };
}
