import style from "./NavList.module.scss";

export const NavList = ({ children }) => {
    return <ul className={style.container}>{children}</ul>;
};
