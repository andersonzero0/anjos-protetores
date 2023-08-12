import { useEffect } from "react";
import { Link } from "react-scroll";
import "./style.css"

export default function Header() {

    return (

        <header className="header">

            <div className="boxLogo"> 

                <img className="imgLogo" src="./logo.svg" alt="logo" />
                <p className="textLogo">ANJOS PROTETORES</p>
                
            </div>

            <nav>

                <ul className="navbar">
                    <Link className="link"
                        activeClass="active"
                        to="QuemSomos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        >
                            <li>QUEM SOMOS</li>
                    </Link>
                    <Link className="link"
                        activeClass="active"
                        to="ComoPossoAjudar"
                        spy={true}
                        smooth={true}
                        duration={400}
                        >
                            <li>COMO POSSO AJUDAR</li>
                    </Link>
                    <Link className="link"
                        activeClass="active"
                        to="Historias"
                        spy={true}
                        smooth={true}
                        duration={400}
                        >
                            <li>HISTÓRIAS</li>
                    </Link>
                </ul>

            </nav>

        </header>
        
    )
    
}