import Footer from "@/components/footer";
import Nav from "@/components/nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Nav />
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer className="mt-auto" />
            </div>
        </>
    );
}
