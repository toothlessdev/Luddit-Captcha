import Image from "next/image";
import style from "./AboutSection.module.scss";

import { Card } from "../Molecules/Card";
import { Title, SubTitle } from "../Atoms/Title";
import { Navigate } from "../Atoms/Navigate";

import iconShield from "@/assets/icon_shield.png";
import iconTool from "@/assets/icon_tool.png";
import iconRobot from "@/assets/icon_robot.png";
import bgEmbed from "@/assets/bg-embed.jpg";

export const AboutSection = () => {
    return (
        <>
            <section id="about" className={style.section_about}>
                <Title size="xl" align="center" content={["Enhanced abusing protection", "for your service"]}></Title>

                <div className={style.about_container}>
                    <Card imgsrc={iconShield} content={["Improved", "Security"]}></Card>
                    <Card imgsrc={iconTool} content={["Easy to", "Use"]}></Card>
                    <Card imgsrc={iconRobot} content={["More", "Precise"]}></Card>
                </div>
            </section>

            <section id="detail" className={style.section_detail}>
                <Title size="l" align="right" content={["Luddit Captcha will sort out", "abusing users precisely."]}></Title>
                <Navigate align="right" href="/demo">
                    Try Demo
                </Navigate>
            </section>

            <section className={style.section_embed}>
                <div className={style.embed_container}>
                    <Title size="l" align="left" content={["You can embed on", "Any Services Easily."]}></Title>
                    <SubTitle content={["Apply our service on Web, App Anywhere you want"]}></SubTitle>
                    <Navigate align="left" href="/docs">
                        View Docs
                    </Navigate>
                </div>

                <div className={style.embed_container}>
                    <Image src={bgEmbed} layout="responsive"></Image>
                </div>
            </section>
        </>
    );
};
