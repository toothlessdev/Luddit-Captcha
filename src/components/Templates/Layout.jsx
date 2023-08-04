import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div id="cursor"></div>
            <main style={{ paddingTop: "80px" }}>{children}</main>
            <Footer />
        </>
    );
};
