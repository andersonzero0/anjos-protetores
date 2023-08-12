import { Fish, HelpingHand, PawPrint } from "lucide-react"
import "./style.css"
import "./responsive.css"

export default function ComoPossoAjudar() {

    return (

        <main id="ComoPossoAjudar" className="mainComoPossoAjudar">

            <h1 className="titleMain">COMO POSSO AJUDAR?</h1>

            <section className="sectionContent">

                <div className="bodyContent">

                    <article>

                        <h1 className="titleArticle"> <HelpingHand size={"32px"} color="#038C5A" /> Voluntariado: Faça Parte do Nosso Time</h1>

                        <p>Se você tem um coração cheio de amor pelos animais e está disposto a dedicar algum tempo, o voluntariado é uma maneira fantástica de impactar diretamente a vida dos nossos residentes peludos. Desde a limpeza e alimentação até brincadeiras e socialização, cada momento que você compartilha com eles faz uma grande diferença. Junte-se a nós para enriquecer suas vidas e as nossas!</p>
                        
                    </article>

                    <article>

                        <h1 className="titleArticle"> <Fish size={"32px"} color="#038C5A"/> Doações de Ração e Suprimentos: Nutrindo Esperanças</h1>

                        <p>Nossos amigos de quatro patas precisam de nutrição adequada para se manterem saudáveis e felizes. Sua doação de ração, petiscos, brinquedos e outros suprimentos essenciais ajuda a garantir que nunca falte nada em suas tigelas e corações. Cada contribuição é um passo em direção a proporcionar a eles uma vida plena e confortável enquanto aguardam por um novo lar.</p>
                        
                    </article>

                    <article>

                        <h1 className="titleArticle"> <PawPrint size={"32px"} color="#038C5A" /> Adoção Responsável: Mude uma Vida para Sempre</h1>

                        <p>Se você está pronto para abrir seu coração e lar para um animal de estimação, considere a adoção. Nossos cães e gatos estão cheios de amor e gratidão, prontos para se tornarem parte da sua família. Ao adotar, você não apenas oferece a eles uma segunda chance, mas também experimenta a alegria de uma amizade verdadeira e incondicional.
                        </p>
                        
                    </article>
                    
                </div>

                <div className="contentPix">

                    <h1>VOCÊ TAMBEM PODE AJUDAR FAZENDO UMA DOAÇÃO ATRAVÊS DO <strong>PIX</strong></h1>

                    <div className="conteinerPix">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/800px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png" alt="" />

                        <small>Silva Helena Herculano Rocha</small>
                    </div>
                    
                </div>
                
            </section>
            
        </main>
        
    )

}