import { Mail, MessageCircle } from "lucide-react"
import "./style.css"

export default function QuemSomos() {

    return (

        <main id="QuemSomos" className="mainQuemSomos">

            <section className="bodyContent">

                <h1 className="titleSection">QUEM SOMOS?</h1>

                <p className="contentText">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.z
                </p>
                
            </section>

            <section className="sectionContact">

                <div className="conteinerImage">

                    <img src="./headerImage.webp" alt="" />
                    
                </div>

                <div className="conteinerContact">
                    <h1 className="titleSection">CONTATO</h1>

                    <div className="conteinerOptionsContact">

                        <div>
                            <MessageCircle size={"28px"} />
                            <p className="textContact">WHATSAPP</p>
                        </div>

                        <div>
                            <Mail size={"28px"} />
                            <p className="textContact">EMAIL</p>
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>

        </main>

    )
    
}