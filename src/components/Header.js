import React, { useState } from 'react';
import axios from 'axios';
import './Header.css'; // Importe o arquivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone 'faTimes'
import logo from '../assets/logo.png'; // Substitua pelo caminho da sua imagem
import FilterMenu from './FilterMenu';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

const Header = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Função para rolar para o topo da página
  const handleLogoClick = () => {
    navigate('/'); // Navega para a rota inicial (index)
  };

  const toggleFilter = () => setShowFilter(prev => !prev);

  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=bc60c2dc515b93fd83dde3c5fe6f3822&query=${searchTerm}`
        );
        setResults(response.data.results);
        setShowResults(true); // Mostra os resultados ao pesquisar
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
  };

  const closeResults = () => {
    setShowResults(false); // Fecha a guia de resultados
    setResults([]); // Limpa os resultados
  };

  return (
    <div className="header-container">
      <img
        className="logo"
        src={logo}
        alt="Logo"
        onClick={handleLogoClick} // Adiciona o evento de clique para rolar para o topo
      />
      <div className="search-container">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <div className="filter-icon" onClick={toggleFilter}>
          <FontAwesomeIcon icon={faSliders} />
        </div>
        {showFilter && <FilterMenu onClose={toggleFilter} />}
      </div>
      <button className="login-button" onClick={() => navigate('/login')}>Login</button>

      {showResults && (
        <div className="results-container">
          <button className="close-button" onClick={closeResults}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {results.slice(0, 5).map((movie) => (
            <div className="result-item" key={movie.id}>
              <img
                className="result-image"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // Caminho para a imagem
                alt={movie.title}
              />
              <div>
                <div className="result-title">{movie.title}</div>
                <div className="result-date">{new Date(movie.release_date).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
