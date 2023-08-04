import Link from "next/link";
import { useRouter } from "next/router";
import style from "./NavListItem.module.scss";

export const NavListItem = ({ href, children }) => {
    const router = useRouter();
    return (
        <li className={style.item} onClick={() => router.push("/href")}>
            {children}
        </li>
    );
};
