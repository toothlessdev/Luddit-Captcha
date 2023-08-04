import { Layout } from "@/components/Templates/Layout";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
