import React from "react"
import Imagem1 from '../img/img1.jpg';
import Imagem2 from '../img/img2.jpg';
import Imagem3 from '../img/img3.jpg';
import Imagem4 from '../img/img4.jpg';
import Imagem5 from '../img/img5.jpg';
import Imagem6 from '../img/img6.jpg';
import Imagem7 from '../img/img7.jpg';
import Imagem8 from '../img/img8.jpg';
import Imagem9 from '../img/img9.jpg';
import Imagem10 from '../img/img10.jpg';
import Imagem11 from '../img/img11.jpg';
import Imagem12 from '../img/img12.jpg';


export default function Home(props) {
    return (
        <>
        <main>
            <div className="Biblioteca">
                <img src={Imagem1} alt="Adeus Aurora" />
                <img src={Imagem2} alt="Emma" />
                <img src={Imagem3} alt="Nada de novo no front" />
                <img src={Imagem4} alt="Deuses de Neon" />
                <img src={Imagem5} alt="Guerra das Duas rainhas" />
                <img src={Imagem6} alt="Vida Dois" />
                <img src={Imagem7} alt="Elogio aos quatro" />
                <img src={Imagem8} alt="Conhece-te mesmo" />
                <img src={Imagem9} alt="Os temperamentos" />
                <img src={Imagem10} alt="As 5 linguagens" />
                <img src={Imagem11} alt="Neuromances" />
                <img src={Imagem12} alt="Cuidado não olhe para trás" />
            </div>
        </main>
        </>
    )
}