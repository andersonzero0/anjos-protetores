import ComoPossoAjudar from "../../components/ComoPossoAjudar";
import Header from "../../components/Header";
import Historias from "../../components/Historias";
import QuemSomos from "../../components/QuemSomos";
import "./style.css";

export default function Home() {

    return (
        <div class="main">
            <Header />

            <QuemSomos />

            <ComoPossoAjudar/>

            <Historias/>
        </div>
    )

}