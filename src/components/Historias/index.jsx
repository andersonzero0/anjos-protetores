import CardHistoria from "../CardHistoria"
import "./style.css"

export default function Historias() {

    const animals = [

        {
            img: "./juninho.webp",
            name: "Juninho",
            history: "Juninho estava vivendo em um terreno, quando o terreno foi vendido, infelizmente Juninho não podia mais ficar por lá, então uma pessoa o levou para o abrigo. Juninho é um cachorro dócil, além disso é castrado e se da bem com todos."
        },
        {
            img: "./guerreiro.webp",
            name: "Guerreiro",
            history: "o Guerreiro apareceu na rua com um buraco aberto na cabeça, cheio de larvas, felizmente uma pessoa doou uma quantidade para que a ONG pudesse fazer o tratamento do Guerreiro, que além de estar ferido também estava muito magro, hoje em dia Guerreiro está bonito e forte, sendo bem cuidado com uma ciscatriz em sua nuca, que nos mostra o motivo de ser conhecido por Guerreiro."
        },
        {
            img: "./panda.webp",
            name: "Panda",
            history: "Panda é o cão mais velho do abrigo, ele já teve uma casa e uma familia, mas foi abandonado junto de seu irmão, infelizmente seu irmão veio a falecer. Embora Panda tenha uma idade avançada(7-8 anos), é um cachorro muito querido e bem cuidado, cães idosos também merecem amor e uma família!"
        }
        
    ]

    return (
        <main id="Historias" className="mainHistorias">
            <h1 style={{ fontWeight: 200 }}>HISTÓRIAS</h1>

            { animals.map((animal) => {
                return <CardHistoria key={animal.img} img={animal.img} name={animal.name} history={animal.history} />
            }) }
        </main>
    )
    
}