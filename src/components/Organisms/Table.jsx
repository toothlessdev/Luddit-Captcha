import { useEffect, useRef } from "react";
import style from "./Table.module.scss";

export const Table = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};

export const TableHead = ({ children }) => {
    return <div className={style.head}>{children}</div>;
};

export const TableBody = ({ children }) => {
    return <div className={style.body}>{children}</div>;
};

export const TableGroup = ({ children }) => {
    return (
        <div className={style.group} itemSize={children.length}>
            {children}
        </div>
    );
};

export const TableItem = ({ width, height, itemSize, children }) => {
    const itemRef = useRef();

    useEffect(() => {
        itemRef.current.style.width = `${100 / itemSize}%`;
    }, [itemSize]);

    return (
        <div ref={itemRef} className={style.item} style={{ width: width, height: height }}>
            {children}
        </div>
    );
};
