import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, getMovieCredits, getSimilarMovies } from '../api'; // Importa funções para obter detalhes do filme, créditos e filmes semelhantes
import './MovieDetailPage.css'; // Importa o arquivo CSS para estilização
import { FaStar } from 'react-icons/fa'; // Importa ícone de estrela para a classificação
import Slider from 'react-slick'; // Importa o componente de carrossel

const imageHost = "https://image.tmdb.org/t/p/original/"; // URL base para imagens

function MovieDetailPage() {
    const { id } = useParams(); // Pega o ID do filme da URL
    const [movie, setMovie] = useState(null); // Estado para armazenar detalhes do filme
    const [credits, setCredits] = useState(null); // Estado para armazenar créditos do filme
    const [similarMovies, setSimilarMovies] = useState([]); // Estado para armazenar filmes semelhantes

    useEffect(() => {
        // Função para buscar dados do filme, créditos e filmes semelhantes
        const fetchData = async () => {
            const movieData = await getMovieDetail(id);
            setMovie(movieData);

            const creditsData = await getMovieCredits(id);
            setCredits(creditsData);

            const similarMoviesData = await getSimilarMovies(id);
            setSimilarMovies(similarMoviesData.results);
        };

        fetchData(); // Chama a função para buscar dados
    }, [id]); // Dependência para recarregar quando o ID do filme muda

    // Exibe "Loading..." enquanto os dados estão sendo carregados
    if (!movie || !credits) {
        return <div>Loading...</div>;
    }

    // Configurações para o carrossel de elenco
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Mostra 5 slides por vez
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Filtra os créditos por categorias específicas
    const directors = credits.crew.filter(person => person.job === "Director");
    const writers = credits.crew.filter(person => person.job === "Writer");
    const artists = credits.cast.slice(0, 10); // Limita os artistas a 10

    // Formata os dados para exibição
    const releaseYear = new Date(movie.release_date).getFullYear();
    const runtime = `${Math.floor(movie.runtime / 60)}h${movie.runtime % 60}m`;
    const voteCount = `${Math.round(movie.vote_count / 1000)} mil`;
    const rating = movie.vote_average.toFixed(1);
    const certification = movie.adult ? '18+' : 'L'; // Exemplo de classificação indicativa, depende da API

    return (
        <div className="movie-detail-container">
            {/* Banner com imagem de fundo e botão de trailer */}
            <div className="banner" style={{ backgroundImage: `url(${imageHost}${movie.backdrop_path})` }}>
                <button className="trailer-button">Assistir ao trailer</button>
            </div>
            {/* Seção de filtros */}
            <div className="filters-container">
                <h2>Filtros</h2>
                <div className="filters">
                    <button className="filter-button">Comédia de Amigos</button>
                    <button className="filter-button">Comédia Atrevida</button>
                    <button className="filter-button">Sátira</button>
                    <button className="filter-button">Super-Herói</button>
                    <button className="filter-button">Ação</button>
                    <button className="filter-button">Aventura</button>
                    <button className="filter-button">Comédia</button>
                    <button className="filter-button">Sci-Fi</button>
                </div>
            </div>
            {/* Descrição do filme com título, classificação e informações adicionais */}
            <div className="movie-description">
                <h1>
                    {movie.title}
                    <span className="rating">
                        <FaStar className="star-icon"  /> {rating}
                    </span>
                    <small className="subtitle"> | {voteCount} • {runtime} • {certification} • {releaseYear}</small>
                </h1>
                <p>{movie.overview}</p>
            </div>

            {/* Créditos do filme, incluindo diretores, roteiristas e artistas */}
            <div className="movie-credits">
                <div className="movie-directors">
                    <h2>Direção</h2>
                    <p>
                        {directors.map((director, index) => (
                            <span key={director.id}>
                                {director.name}{index < directors.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="movie-writers">
                    <h2>Roteiristas</h2>
                    <p>
                        {writers.map((writer, index) => (
                            <span key={writer.id}>
                                {writer.name}{index < writers.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="movie-artists">
                    <h2>Artistas</h2>
                    <p>
                        {artists.map((artist, index) => (
                            <span key={artist.cast_id}>
                                {artist.name}{index < artists.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Carrossel de elenco principal */}
            <div className="movie-artists">
                <h2>Elenco Principal</h2>
                <Slider {...carouselSettings} className="carousel">
                    {artists.length > 0 ? (
                        artists.map(artist => (
                            <div key={artist.cast_id} className="cast-item">
                                <img 
                                    src={`${imageHost}${artist.profile_path}`} 
                                    alt={artist.name}
                                    className="cast-photo" 
                                />
                                <p>{artist.name}</p>
                                <p>{artist.character}</p>
                            </div>
                        ))
                    ) : (
                        <p>Não disponíveis</p>
                    )}
                </Slider>
            </div>

            {/* Seção de filmes semelhantes */}
            <div className="similar-movies">
                <h2>Filmes Semelhantes</h2>
                <div className="similar-movies-list">
                    {similarMovies.map(movie => (
                        <div key={movie.id} className="similar-movie-item">
                            <img 
                                src={`${imageHost}${movie.poster_path}`} 
                                alt={movie.title} 
                                className="similar-movie-poster" 
                            />
                            <p>{movie.title}</p>
                            <button className="trailer-button">Assistir ao trailer</button> {/* Adiciona o botão para todos os filmes */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;
