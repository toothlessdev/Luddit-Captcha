import Image from "next/image";
import { useEffect, useRef } from "react";

import { Title } from "../Atoms/Title";
import style from "./DemoSection.module.scss";

export const DemoSection = ({ imgSrc, options, onSuccess, onFail, children }) => {
    return (
        <section className={style.section_demo}>
            <div className={style.container}>
                <Image src={"/demo" + imgSrc} layout="fill" />
            </div>

            <div className={style.container}>{children}</div>
        </section>
    );
};

export const DemoLoading = () => {
    return (
        <section className={style.section_demo_skeleton}>
            <div className={style.container_skeleton}>
                <Image src={"/demo" + imgSrc} layout="fill" />
            </div>

            <div className={style.container_skeleton}>{children}</div>
        </section>
    );
};

export const DemoOption = ({ prompt, option, onClickColor }) => {
    const btnRef = useRef();

    const onSuccess = (e) => {
        btnRef.current.style.backgroundColor = "#55a03b";
        console.log("correct");
    };

    const onFail = (e) => {
        btnRef.current.style.backgroundColor = "#be4141";
        btnRef.current.style.animationName = "vibrate";
        btnRef.current.style.animationDuration = "0.5s";
    };

    useEffect(() => {
        if (option === "success") btnRef.current.addEventListener("click", onSuccess);
        else if (option === "fail") btnRef.current.addEventListener("click", onFail);
    }, []);

    return (
        <div ref={btnRef} className={style.item}>
            {prompt}
        </div>
    );
};
