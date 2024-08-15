import React from 'react'; // Importa o React para criar componentes
import "./Banner.css"; // Importa o arquivo CSS para estilização do componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente para exibir ícones
import { faFireFlameCurved, faPlay } from '@fortawesome/free-solid-svg-icons'; // Importa os ícones específicos para serem usados

// Array contendo URLs das imagens que serão usadas no banner
const images = [
    "https://s3-alpha-sig.figma.com/img/1722/b829/1f9d6fb5cbfbb6016c73896b67fe9d7a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlLI7KvG3qdo1JaB8J4vFCPhI84GxZKdH86vvVQ7Mhh~gaiWt2R-L4mjiiMiO162kHIHg8oTSkZ6OKFHCkDhR66HB4XCvUi4kAb15RHC8Qu8Q64Vi2nB1IAMDg8cz-x~dbicfVjQGt9xKXkRMPqpoR2OwBmZR-yF75LfGKlQQ-evyH~MDusozFWq7BGNVuj51GT8SMPq0qSwFhjFe-46UiTmvE7LdxbU5hUhrba1DzPnw5M33O3GLaPCOeo9BuS5408n6~nBKBj53FNyT4wCsr6XzKAUvQq9bQT-ldndT5bVezNZNcIx05v3h-J-tbKtbXfeldIblsJiiSt~4NhG2g__", // Imagem grande
    "https://s3-alpha-sig.figma.com/img/0ac4/259a/4303be4007bd45ff83a73f43bbba7503?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxg2SyjDtiOjlEoT~LARluDa1QYaA0WlFuOBvzCrA932StPJK0sajooQamuSz9cF3Pfab6Ru45ufKs1Ugb1vE2DqliQ2PWxbNVJO0NKk22oSCrhULlv-lPB2dsNEJtXLTRGN7gPpIfA96dhiY94So1a9DPyG40p8P7lLLsprWLyPVPuRrVWKDBJovGMuEnQgaV-laVdW9074mJg4VJOP3ZYuf6BKxMmC2eOmbYwzykwbG76dTmyUA3NpBzjgEp6Qdfut3DK1V7efA5CqkFwU56OYIir8pLasJjHxTkad9xmJfLOnl-J3~fw~cxDxv9GnAXZlRxb7oOqJUvkv~6P-Bw__", // Imagem pequena 1
    "https://s3-alpha-sig.figma.com/img/b169/d158/7da49e45d7502d9f63c2859bf74fcce9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-ZyjG2NOeNw1LmgC~xrOJSjCCJbuLJC2Qf1GCsHVn2SJbe-tH0Hz6rCXCQ0lEyYy0ZcpRR0Em45wYdKyx62iUrodqswXB-lJZBv5nsotIl44QeaVvILPCxoB~nxAHsTpwn3OoHT8dX8afh~bZp5YHy8fglySJAdRBbnE5gYgcP2TMCOL8AH7iYCnBU2dFa7QT2lXmFnVKPnngDr0Y4fhWS3K3DrcHVHwKvGZUeVNtuiQqtSH1pHYGtz8RK43i-WsW82~M8Ky--5CXPt8-~XlixCPFqhJZVbFj9LUwN4BXmGj5HLOveQxjk9vjLJLtaLKMucoKVPCoqxgFqoGToeWw__", // Imagem pequena 2
    "https://s3-alpha-sig.figma.com/img/429c/d3f4/a037cb4d59865e40c4e8b3e373b40e62?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yycrva1jl5r16-OAd62Zc2-OAxKVM5fp6n6uq3QPkZ6Ga84cAY4-GlfJsNlFqnC7fUoOB1rq-QdKv~2GVSBiz1OYa1aeY2T~RzSM-iw4zm9imKBd~HOidzMtOxWO5xH3uz-~hxuCJpNiksV4E6~vwxm-bLyk3FD3QWj9gjDSw7ttQEyYykusxWXQ2c2mBfTW05KYxbd8362oabuyqFBhqzIjFo8p73SdcBrP~C5qJsWl59qaHZS5FLe~fzojZj~z9jvzATol5aP940O2NO~aCq3MfrH-xywFLO4jD3ITd4TeHs1qTPTLUjp9Z3n9KLsnsef0YVf0QViyrYZOHDpQyw__"  // Imagem pequena 3
];

// Títulos das pequenas imagens
const smallImageTitles = [
    "Divertidamente 2",
    "Meu Malvado Favorito 4",
    "Twitter"
];

// Avaliações das pequenas imagens
const smallImageRatings = [
    "4.5",
    "4.0",
    "3.8"
];

// Função que define o componente Banner
function Banner() {
    return (
        <div className="banner-container"> {/* Container principal do banner */}
            <div className="banner-large"> {/* Seção para a imagem grande */}
                <img
                    src={images[0]} // URL da imagem grande
                    alt="Imagem grande" // Texto alternativo para a imagem grande
                />
                <div className="banner-content"> {/* Conteúdo sobreposto à imagem grande */}
                    <button className="highlight-button"> {/* Botão de destaque */}
                        <FontAwesomeIcon icon={faFireFlameCurved} /> {/* Ícone de chama */}
                        <span className="text">  Destaque</span> {/* Texto do botão */}
                    </button>
                    <h1 className="banner-title">
                        Deadpool & Wolverine {/* Título do banner */}
                    </h1>
                    <div className="rating"> {/* Seção de avaliação */}
                        <span className="star">⭐</span> {/* Ícone de estrela */}
                        <span className="rating-number">8,2</span> {/* Nota */}
                        <span className="text">| 120 mil 2h8m ₢ Comedy, Action, Adventure, Superhero... ¹ 2024</span> {/* Detalhes adicionais */}
                    </div>
                    <p className="banner-description">
                        Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo da extinção.. {/* Descrição do filme */}
                    </p>
                    <button className="watch-button"> {/* Botão para assistir ao trailer */}
                        <h3>Assistir ao trailler  {/* Texto do botão */}
                        <FontAwesomeIcon icon={faPlay} /></h3>  {/* Ícone de play */}
                    </button>
                </div>
            </div>
            <div className="banner-small"> {/* Seção para as imagens menores */}
                <h3 className="small-banner-title">Destaques também</h3> {/* Título da seção de imagens menores */}
                <div className="small-banner-images"> {/* Container para as pequenas imagens */}
                    {images.slice(1).map((image, index) => ( // Mapeia as imagens pequenas para exibir na tela
                        <div key={index} className="small-banner-item"> {/* Cada item individual */}
                            <img
                                src={image} // URL da imagem pequena
                                alt={`Imagem pequena ${index + 1}`} // Texto alternativo para a imagem pequena
                            />
                            <div className="small-banner-content"> {/* Conteúdo sobreposto à imagem pequena */}
                                <div className="small-banner-rating"> {/* Avaliação da pequena imagem */}
                                    <span className="star">⭐</span> {/* Ícone de estrela */}
                                    <span className="rating-number">{smallImageRatings[index]}</span> {/* Nota da pequena imagem */}
                                </div>
                                <h4 className="small-banner-movie-title">
                                    {smallImageTitles[index]} {/* Título da pequena imagem */}
                                </h4>
                                <button className="small-watch-button"> {/* Botão para assistir ao trailer da pequena imagem */}
                                    Assistir ao trailler &nbsp;<FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner; // Exporta o componente Banner para ser usado em outras partes da aplicação
