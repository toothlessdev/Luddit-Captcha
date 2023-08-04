import { useRouter } from "next/router";
import { Title } from "../Atoms/Title";
import { Button } from "../Atoms/Button";

import style from "./PartenerSection.module.scss";

export const PartenerSection = () => {
    const router = useRouter();
    return (
        <section className={style.section_partener}>
            <Title size="xl" align="center" content={["Our Parteners"]}></Title>
            <Button type="primary" onClick={() => router.push("/contact")} styles={{ margin: "20px auto" }}>
                Contact Us
            </Button>
        </section>
    );
};
