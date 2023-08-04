import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Button } from "@/components/Atoms/Button";
import { Title } from "@/components/Atoms/Title";
import { Loader } from "@/components/Atoms/Loader";
import { LoaderSection } from "@/components/Templates/LoaderSection";
import { DemoImage, DemoOption, DemoSection } from "@/components/Templates/DemoSection";

const GetRandNums = (size) => {
    let randArr = [];
    while (randArr.length < size) {
        let randNum = Math.floor(Math.random() * 10);
        if (randArr.includes(randNum)) continue;
        else randArr.push(randNum);
    }
    console.log(randArr);
    return randArr;
};

const Shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
};

export default function DemoPage(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const [ans, setAns] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        let randArr = GetRandNums(4);
        setAns((ans) => randArr[0]);
        setOptions((options) => Shuffle([...randArr]));
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <LoaderSection></LoaderSection>;
    } else {
        return (
            <>
                <Title
                    styles={{ padding: "100px 0px 30px 0px" }}
                    size="xl"
                    align="center"
                    content={["Choose the sentence", "that best describes the following picture"]}
                ></Title>

                <Button type="primary" styles={{ margin: "0px auto" }} onClick={() => router.reload("/demo")}>
                    Regenerate
                </Button>

                <DemoSection imgSrc={props.data[ans].imgSrc}>
                    {options.map((element, index) => {
                        return <DemoOption key={index} prompt={props.data[element].prompt} option={element == ans ? "success" : "fail"} />;
                    })}
                </DemoSection>
            </>
        );
    }
}

export async function getServerSideProps() {
    return {
        props: {
            data: [
                {
                    imgSrc: "/img_demo1.png",
                    prompt: "a high quality hdr image of a silhouette of hermione granger holding an avocado, trending on artstation",
                },
                {
                    imgSrc: "/img_demo2.png",
                    prompt: "A man jogging in the morning holding a baby and an old book",
                },
                {
                    imgSrc: "/img_demo3.png",
                    prompt: "The troll with a jacket is holding a flute, jacket a jacket, a very closeup",
                },
                {
                    imgSrc: "/img_demo4.png",
                    prompt: "A high density area of space with lots of trash, artstation",
                },
                {
                    imgSrc: "/img_demo5.png",
                    prompt: "Unicorn in a forest with a cupboard, magic, by Amy",
                },
                {
                    imgSrc: "/img_demo6.png",
                    prompt: "the captain somehow became wider and quieter, pen and ink, intricate line drawings",
                },
                {
                    imgSrc: "/img_demo7.png",
                    prompt: "A Zombie telling the last zombie to eat the card with his face on",
                },
                {
                    imgSrc: "/img_demo8.png",
                    prompt: "A cupboard with an open door, a chalkboard, full of color, hyper realistic",
                },
                {
                    imgSrc: "/img_demo9.png",
                    prompt: "Powdered clambering centaur in armor holding money bag, intricate pen drawings",
                },
                {
                    imgSrc: "/img_demo10.png",
                    prompt: "Two human figures shaped like air with two problems, a dinner box",
                },
                {
                    imgSrc: "/img_demo11.png",
                    prompt: "A very detailed rendering of a large cliffside house with multiple rooms with lights",
                },
            ],
        },
    };
}
