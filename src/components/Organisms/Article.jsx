import Image from "next/image";
import { Title } from "../Atoms/Title";
import style from "./Article.module.scss";

export const Article = ({ align, title, subtitle, description, imgSrc }) => {
    if (align === "left") {
        return (
            <article className={style.wrapper}>
                <div className={style.container}>
                    <Title align={"left"} size="l" content={title}></Title>
                    <Title align={"left"} size="m" content={subtitle} styles={{ padding: "20px 0px" }}></Title>
                    {description.map((element, index) => {
                        return <p key={index}>{element}</p>;
                    })}
                </div>

                <div className={style.container}>
                    <Image src={imgSrc} alt="article"></Image>
                </div>
            </article>
        );
    }

    if (align === "right") {
        return (
            <article className={style.wrapper}>
                <div className={style.container}>
                    <Image src={imgSrc} alt="article"></Image>
                </div>

                <div className={style.container}>
                    <Title align={"left"} size="l" content={title}></Title>
                    <Title align={"left"} size="m" content={subtitle} styles={{ padding: "20px 0px" }}></Title>
                    {description.map((element, index) => {
                        return <p key={index}>{element}</p>;
                    })}
                </div>
            </article>
        );
    }
};
