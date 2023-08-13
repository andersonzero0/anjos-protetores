import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react"
import "./style.css"
import "./responsive.css"

export default function QuemSomos() {

    return (

        <main id="QuemSomos" className="mainQuemSomos">

            <section className="bodyContent">

                <h1 className="titleSection">QUEM SOMOS?</h1>

                <p className="contentText">
                Nossa história começou com seis mulheres apaixonadas por animais. Em 2017, unimos forças, alugamos uma casa e iniciamos uma jornada para ajudar cães e gatos desamparados nas ruas. Com mais resgates e dedicação, vimos a necessidade de um espaço maior. Em 2018, demos um passo corajoso para uma casa ampla, marcando o começo do Abrigo Anjos Protetores. Através do grupo "anjoseprotetores_sga" no WhatsApp, conectamos com pessoas solidárias que compartilham amor por seres vivos. Mobilizamos recursos, arrecadamos materiais e conquistamos terreno. Em janeiro de 2020, mudamos para espaço novo com casinhas construídas com amor. Nossa missão é clara: resgatar, cuidar, curar e encaminhar animais para adoção. O Abrigo Anjos Protetores reflete amor e dedicação. Desafios são muitos, mas com sua ajuda, superamos. Precisamos de recursos para garantir cuidados essenciais. Sua contribuição fortalece missão de respeito por toda vida. Junte-se à jornada de compaixão. O Abrigo Anjos Protetores é refúgio de esperança, mostrando como amor transforma vidas.
                </p>
                
            </section>

            <section className="sectionContact">

                <div className="conteinerImage">

                    <img src="./headerImage.webp" alt="" />
                    
                </div>

                <div className="conteinerContact">
                    <h1 className="titleSection">CONTATO</h1>

                    <div className="conteinerOptionsContact">

                        <a href="https://wa.me/5585992292521">
                            <div>
                                <MessageCircle size={"28px"} />
                                <p className="textContact">WHATSAPP</p>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/anjosprotetores_sga/">
                            <div>
                                <Instagram size={"28px"} />
                                <p className="textContact">INSTAGRAM</p>
                            </div>
                        </a>

                        <a href="mailto:silviahelenaherculano@yahoo.com.br">
                            <div>
                                <Mail size={"28px"} />
                                <p className="textContact">EMAIL</p>
                            </div>
                        </a>

                        <a href="#">
                            <div>
                                <p style={{textAlign: "center"}} className="textContact"><MapPin size={"28px"} />ENDEREÇO: <br /> Endereço Travessa Arapixi s/n, Bairro Carioca, São Gonçalo do Amarante, CE</p>
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
                
            </section>

        </main>

    )
    
}