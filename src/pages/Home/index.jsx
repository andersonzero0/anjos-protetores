import ComoPossoAjudar from "../../components/ComoPossoAjudar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Historias from "../../components/Historias";
import QuemSomos from "../../components/QuemSomos";

export default function Home() {

    return (
        <>
            <Header />

            <QuemSomos />

            <ComoPossoAjudar/>

            <Historias/>

            <Footer/>
        </>
    )

}