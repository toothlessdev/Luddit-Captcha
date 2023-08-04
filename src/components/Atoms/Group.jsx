import style from "./Group.module.scss";

export const Group = ({ children }) => {
    return <div className={style.group}>{children}</div>;
};
