import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação de página

const MovieItem = ({ movie }) => {
  const navigate = useNavigate(); // Cria uma instância de navegação

  // Função para lidar com o clique no item do filme
  const handleClick = () => {
    navigate(`/movie/${movie.id}`); // Navega para a página de detalhes do filme com base no ID
  };

  return (
    <div onClick={handleClick} className="movie-item">
      {/* Exibe o poster do filme */}
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // URL da imagem do poster
        alt={movie.title} // Texto alternativo para a imagem
      />
      {/* Exibe o título do filme */}
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieItem;
