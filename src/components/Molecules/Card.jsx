import Image from "next/image";
import style from "./Card.module.scss";

export const Card = ({ imgsrc, content }) => {
    return (
        <div className={style.card}>
            <div>
                <Image src={imgsrc}></Image>
            </div>
            <div>
                <h2>
                    <span>{content[0]}</span>
                    <br />
                    <span>{content[1]}</span>
                </h2>
            </div>
        </div>
    );
};
