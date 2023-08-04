import { Title } from "@/components/Atoms/Title";
import { Article } from "@/components/Organisms/Article";

import imgStep1 from "@/assets/bg-step1.jpg";
import imgStep2 from "@/assets/bg-step2.jpg";
import imgStep3 from "@/assets/bg-step3.png";

export default function Feature() {
    return (
        <>
            <Title align="center" size="xl" content={["How Does It Work?"]} styles={{ padding: "80px 0px" }}></Title>

            <Article
                align="left"
                title={["Collect Sentences"]}
                subtitle={["from documents, articles, websites, books etc.."]}
                description={[
                    "It was you I feared I might be too late. You nearly were, I could ...They have enough face To one as young as you I’m sure it seems incredible ... But to a very very long day after all to the well organized ... precisely those things that are worst for them",
                    " - Harry Poter - ",
                ]}
                imgSrc={imgStep1}
            ></Article>

            <Article
                align="right"
                title={["Analyze Sentences", "Using NLP Model"]}
                subtitle={["Latent Space Embedding And", "Extract Keywords from Each Cluster"]}
                imgSrc={imgStep2}
                description={["feared powdered you be clambering were nearly armor they money enough"]}
            ></Article>

            <Article
                align="left"
                title={["Generate Prompt And", "Images with Stable Diffusion"]}
                subtitle={["Using co:here's Generate API"]}
                imgSrc={imgStep3}
                description={["Powdered clambering centaur in armor holding money bag, intricate pen drawings"]}
            ></Article>
        </>
    );
}
