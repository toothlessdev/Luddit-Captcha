import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./NavBar.module.scss";

import { Button } from "../Atoms/Button";
import { NavList } from "./NavList";
import { NavListItem } from "../Molecules/NavListItem";

import iconBars from "@/assets/icon_bars_white.png";

export const NavBar = () => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {}, []);

    return (
        <>
            <nav className={style.nav_container}>
                <ul>
                    <li className={style.nav_item_head}>
                        <Link href="/">Luddit</Link>
                    </li>

                    <li style={{ flexGrow: 1 }} />

                    <li className={style.nav_item}>
                        <Link href="/#about">About</Link>
                    </li>

                    <li className={style.nav_item}>
                        <Link href="/#pricing">Pricing</Link>
                    </li>

                    <li className={style.nav_item}>
                        <Link href="/feature">Feature</Link>
                    </li>

                    <li className={style.nav_item}>
                        <Link href="/docs">Docs</Link>
                    </li>

                    <li className={style.nav_item}>
                        <Button
                            type="primary"
                            onClick={() => {
                                router.push("/demo");
                            }}
                        >
                            Try Demo
                        </Button>
                    </li>

                    <li className={style.nav_toggle} onClick={() => setToggle(!toggle)}>
                        <Image src={iconBars}></Image>
                    </li>
                </ul>

                {toggle && (
                    <NavList>
                        <NavListItem href="/#about">About</NavListItem>
                        <NavListItem href="/#pricing">Pricing</NavListItem>
                        <NavListItem href="/feature">Feature</NavListItem>
                        <NavListItem href="/docs">Docs</NavListItem>
                        <NavListItem href="/demo">Try Demo</NavListItem>
                    </NavList>
                )}
            </nav>
        </>
    );
};
