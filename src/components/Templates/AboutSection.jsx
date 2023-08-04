import Image from "next/image";
import style from "./AboutSection.module.scss";

import { Card } from "../Molecules/Card";
import { Navigate } from "../Atoms/Navigate";
import { Title, SubTitle } from "../Atoms/Title";
import { Table, TableHead, TableBody, TableGroup, TableItem } from "../Organisms/Table";

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
                    <Image src={bgEmbed} layout="responsive" alt="bg-embed"></Image>
                </div>
            </section>

            <section id="pricing" className={style.section_pricing}>
                <Title styles={{ padding: "50px 0px" }} size="xl" align="center" content={["Pricing"]}></Title>

                <Table>
                    <TableHead>
                        <TableGroup>
                            <TableItem width="100%" height="80px">
                                Billing Rate
                            </TableItem>
                            <TableItem width="100%" height="80px">
                                Cost
                            </TableItem>
                        </TableGroup>
                    </TableHead>

                    <TableBody>
                        <TableGroup>
                            <TableItem width="100%" height="80px">
                                Per API Call
                            </TableItem>
                            <TableItem width="100%" height="80px">
                                0.001$
                            </TableItem>
                        </TableGroup>
                    </TableBody>
                </Table>
            </section>
        </>
    );
};
