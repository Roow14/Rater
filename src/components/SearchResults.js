// src/components/SearchResults.tsx
import React, { useState } from 'react';
import './SearchResults.css';

const SearchResults: React.FC = () => {
  const [results, setResults] = useState([
    // Resultados fictícios
    { id: 1, title: 'Filme 1', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Filme 2', image: '/path/to/image2.jpg' },
    { id: 3, title: 'Filme 3', image: '/path/to/image3.jpg' },
    { id: 4, title: 'Filme 4', image: '/path/to/image4.jpg' },
    { id: 5, title: 'Filme 5', image: '/path/to/image5.jpg' },
    { id: 6, title: 'Filme 6', image: '/path/to/image6.jpg' },
  ]);

  return (
    <div className="results-container">
      <div className="filter-menu">
        <h3 className="filter-title">Filtros</h3>
        <select className="filter-category">
          <option value="">Categoria</option>
          <option value="acao">Ação</option>
          <option value="comedia">Comédia</option>
          {/* Outras categorias */}
        </select>
        <input type="date" className="filter-date" placeholder="Data de Lançamento" />
        <button className="filter-button">Aplicar Filtros</button>
      </div>
      {results.slice(0, 5).map(result => (
        <div className="result-item" key={result.id}>
          <img className="result-image" src={result.image} alt={result.title} />
          <div className="result-title">{result.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
