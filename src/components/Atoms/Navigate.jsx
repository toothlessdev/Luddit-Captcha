import Image from "next/image";
import { useRouter } from "next/router";
import style from "./Navigate.module.scss";

import iconRightArrow from "@/assets/icon_right_arrow.svg";

export const Navigate = ({ href, align, children }) => {
    const router = useRouter();

    if (align === "left") {
        return (
            <div style={{ justifyContent: "flex-start" }} className={style.navigate} onClick={() => router.push(href)}>
                <h3>{children}</h3>
                <Image src={iconRightArrow} alt="" />
            </div>
        );
    }

    if (align === "right") {
        return (
            <div style={{ justifyContent: "flex-end" }} className={style.navigate} onClick={() => router.push(href)}>
                <h3>{children}</h3>
                <Image src={iconRightArrow} alt="" />
            </div>
        );
    }

    if (align === "center") {
        return (
            <div style={{ justifyContent: "center" }} className={style.navigate} onClick={() => router.push(href)}>
                <h3>{children}</h3>
                <Image src={iconRightArrow} alt="" />
            </div>
        );
    }
};
