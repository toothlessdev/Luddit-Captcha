import style from "./Title.module.scss";

export const Title = ({ size, styles, align, content }) => {
    if (size === "xl") {
        return (
            <h1 style={{ textAlign: align, fontSize: "3.5rem", ...styles }} className={style.title}>
                {content.map((element, index) => {
                    return (
                        <span key={index}>
                            {element}
                            <br />
                        </span>
                    );
                })}
            </h1>
        );
    }

    if (size === "l") {
        return (
            <h2 style={{ textAlign: align, fontSize: "3rem", ...styles }} className={style.title}>
                {content.map((element, index) => {
                    return (
                        <span key={index}>
                            {element}
                            <br />
                        </span>
                    );
                })}
            </h2>
        );
    }

    if (size === "m") {
        return (
            <h2 style={{ textAlign: align, fontSize: "2rem", ...styles }} className={style.title}>
                {content.map((element, index) => {
                    return (
                        <span key={index}>
                            {element}
                            <br />
                        </span>
                    );
                })}
            </h2>
        );
    }
};

export const SubTitle = ({ content }) => {
    return content.map((element, index) => {
        return (
            <p className={style.sub_title} key={index}>
                {element}
            </p>
        );
    });
};
