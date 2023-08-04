import Image from "next/image";
import style from "./Footer.module.scss";

import iconMail from "@/assets/icon_mail.svg";
import iconCall from "@/assets/icon_call.svg";
import iconFb from "@/assets/icon_fb.svg";
import iconIg from "@/assets/icon_ig.svg";

export const Footer = () => {
    return (
        <footer className={style.container}>
            <h2>Luddit Captcha ©</h2>
            <p>Luddit captcha offers a new paradigm</p>
            <p>for Anti Abusing</p>

            <div className={style.contact}>
                <Image src={iconCall}></Image>
                <Image src={iconMail}></Image>
                <Image src={iconFb}></Image>
                <Image src={iconIg}></Image>
            </div>
        </footer>
    );
};
