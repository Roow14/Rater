import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovies } from "../api";
import "./Row.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

const imageHost = "https://image.tmdb.org/t/p/original/"; // URL base para acessar as imagens dos filmes

function Row({ title, path, isLarge }) {
    // Definindo o estado para armazenar a lista de filmes
    const [movies, setMovies] = useState([]);
    
    // Criação de uma referência para o contêiner das cartas de filmes, usada para a rolagem
    const rowRef = useRef(null);
    
    // Hook do React Router para navegação programática
    const navigate = useNavigate();

    // Função para buscar filmes a partir de um caminho específico da API
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path); // Chama a API para obter os filmes
            setMovies(data?.results); // Armazena os filmes retornados no estado
        } catch (error) {
            console.log("fetchMovies error: ", error); // Captura e exibe qualquer erro que ocorrer
        }
    };

    // useEffect para chamar a função de busca de filmes quando o componente é montado
    useEffect(() => {
        fetchMovies(path); // Chama a API toda vez que o path mudar
    }, [path]); // Dependência no path para re-executar o efeito quando ele mudar

    // Função para rolar a lista de filmes para a esquerda
    const handleScrollLeft = () => {
        rowRef.current.scrollLeft -= rowRef.current.offsetWidth; // Move a rolagem para a esquerda em uma largura de contêiner
    };

    // Função para rolar a lista de filmes para a direita
    const handleScrollRight = () => {
        rowRef.current.scrollLeft += rowRef.current.offsetWidth; // Move a rolagem para a direita em uma largura de contêiner
    };

    // Função para lidar com o clique em um filme, redirecionando para a página de detalhes do filme
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`); // Navega para a página de detalhes do filme com base no ID
    };

    return (
        <div className="row-container">
            {/* Título da linha de filmes */}
            <h2 className="row-header">{title}</h2>

            {/* Contêiner para botões de navegação (esquerda/direita) */}
            <div className="nav-container">
                <button className="nav-button" onClick={handleScrollLeft}>
                    &lt; {/* Botão para rolar à esquerda */}
                </button>
                <button className="nav-button" onClick={handleScrollRight}>
                    &gt; {/* Botão para rolar à direita */}
                </button>
            </div>

            {/* Contêiner das cartas de filmes, referenciado para rolagem */}
            <div className="row-cards" ref={rowRef}>
                {/* Mapeamento dos filmes retornados da API para exibir cada um deles */}
                {movies?.map((movie) => {
                    return (
                        <div 
                            className="movie-card-container" 
                            key={movie.id} // Chave única para cada filme
                            onClick={() => handleMovieClick(movie.id)} // Redireciona ao clicar na carta do filme
                        >
                            {/* Contêiner da avaliação (estrela e número) */}
                            <div className="rating-container">
                                <FontAwesomeIcon icon={faStar} className="rating-star" /> {/* Ícone da estrela */}
                                <span className="rating-number">
                                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} {/* Nota do filme */}
                                </span>
                            </div>

                            {/* Imagem do filme */}
                            <img
                                className={`movie-card ${isLarge && "movie-card-large"}`} // Aplica classe condicional se for uma grande imagem
                                src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} // Define o caminho da imagem
                                alt={movie.name || movie.title} // Texto alternativo com o nome ou título do filme
                            />

                            {/* Título do filme */}
                            <h3 className="movie-title">
                                {movie.name || movie.title} {/* Nome ou título do filme */}
                            </h3>

                            {/* Botão para assistir ao trailer */}
                            <button className="watch-button">
                                Assistir ao trailler <FontAwesomeIcon icon={faPlay} /> {/* Ícone de play */}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
