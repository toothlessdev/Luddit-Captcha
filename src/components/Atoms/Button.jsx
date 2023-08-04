import style from "./Button.module.scss";

export const Button = ({ type, styles, onClick, children }) => {
    if (type === "primary") {
        return (
            <button style={styles} onClick={onClick} className={style.btn_primary}>
                {children}
            </button>
        );
    }

    if (type === "secondary") {
        return (
            <button style={styles} onClick={onClick} className={style.btn_secondary}>
                {children}
            </button>
        );
    }
};
