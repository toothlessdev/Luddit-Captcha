import { Loader } from "../Atoms/Loader";
import style from "./LoaderSection.module.scss";

export const LoaderSection = () => {
    return (
        <section className={style.section}>
            <Loader></Loader>
        </section>
    );
};
