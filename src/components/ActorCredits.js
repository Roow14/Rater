// src/components/ActorCredits.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorCredits } from '../api';
import './ActorCredits.css';

const PAGE_SIZE = 12;

const ActorCredits = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCredits = async () => {
      const creditsData = await getActorCredits(id);
      setCredits(creditsData.cast);
    };
    fetchCredits();
  }, [id]);

  const totalPages = Math.ceil(credits.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const displayedCredits = credits.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="actor-credits-container">
      <h2>Filmes e Séries</h2>
      <div className="actor-credits-list">
        {displayedCredits.map((credit) => (
          <div key={credit.id} className="credit-card">
            <img
              src={`https://image.tmdb.org/t/p/original${credit.poster_path}`}
              alt={credit.title || credit.name}
              className="credit-image"
            />
            <p className="credit-title">{credit.title || credit.name}</p>
            <p className="credit-release-date">{credit.release_date || credit.first_air_date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={currentPage === page + 1 ? 'active' : ''}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ActorCredits;
