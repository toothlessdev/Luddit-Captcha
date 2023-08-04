import { useRouter } from "next/router";
import { Title } from "../Atoms/Title";
import { Button } from "../Atoms/Button";

import style from "./PartnerSection.module.scss";

export const PartnerSection = () => {
    const router = useRouter();
    return (
        <section className={style.section_partener}>
            <Title size="xl" align="center" content={["Our Partners"]}></Title>
            <Button type="primary" onClick={() => router.push("/contact")} styles={{ margin: "20px auto" }}>
                Contact Us
            </Button>
        </section>
    );
};
