import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { Button } from "../Atoms/Button";
import { Group } from "../Atoms/Group";

import style from "./HeroSection.module.scss";
import imgsrc from "@/assets/mockup.png";

export const HeroSection = () => {
    const router = useRouter();

    useEffect(() => {}, []);

    return (
        <section id="hero" className={style.section_hero}>
            <div className={style.section_hero_container}>
                <h1>Captcha For</h1>
                <h1>Next Generation</h1>

                <p>Luddit Captcha is more enhanced abusing discrimination model using Stable Diffusion and NLP model</p>

                <Group>
                    <Button
                        type="primary"
                        onClick={() => {
                            router.push("/demo");
                        }}
                        styles={{ width: "200px" }}
                    >
                        Try Demo
                    </Button>

                    <Button
                        type="secondary"
                        onClick={() => {
                            router.push("/principle");
                        }}
                        styles={{ width: "200px" }}
                    >
                        How Does It Work
                    </Button>
                </Group>
            </div>
            <div className={style.section_hero_container}>
                <Image src={imgsrc} alt="" layout="responsive" />
            </div>
        </section>
    );
};
