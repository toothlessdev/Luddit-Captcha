import Head from "next/head";

import { AboutSection } from "@/components/Templates/AboutSection";
import { HeroSection } from "@/components/Templates/HeroSection";
import { PartnerSection } from "@/components/Templates/PartnerSection";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Luddit Captcha</title>
                <meta name="description" content="Captcha For Next Generation" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Luddit Captcha" />
                <meta property="og:description" content="Captcha For Next Generation" />
                <meta property="og:url" content="luddit-captcha.vercel.app" />

                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content="Luddit Captcha" />
                <meta property="twitter:description" content="Captcha For Next Generation" />

                <meta property="og:article:author" content="github.com/toothlessdev" />

                <meta name="keywords" content="Captcha, AI Resistence, Luddit, New Captcha, Stabble Diffusion, NLP, Abusing, " />
            </Head>

            <HeroSection />
            <AboutSection />
            <PartnerSection />
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
