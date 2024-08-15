// src/components/ActorDetail.js

import React, { useEffect, useState } from 'react'; // Importa React, useEffect e useState para criar e gerenciar o estado do componente e efeitos colaterais
import { useParams } from 'react-router-dom'; // Importa useParams para acessar parâmetros da URL
import { getActorDetails, getActorCredits } from '../api'; // Importa funções para buscar detalhes do ator e créditos (filmes/séries) do ator
import './ActorDetail.css'; // Importa o arquivo CSS para estilização do componente

// Componente ActorDetail que exibe detalhes de um ator específico e seus créditos em filmes e séries
const ActorDetail = () => {
  const { id } = useParams(); // Extrai o parâmetro 'id' da URL, que identifica o ator
  const [actor, setActor] = useState(null); // Estado que armazena os detalhes do ator
  const [credits, setCredits] = useState([]); // Estado que armazena os créditos (filmes/séries) do ator
  const [currentPage, setCurrentPage] = useState(1); // Estado que controla a página atual da lista de créditos
  const [totalPages, setTotalPages] = useState(1); // Estado que armazena o número total de páginas de créditos

  // Efeito que busca os detalhes do ator e os créditos ao carregar a página ou quando 'id' ou 'currentPage' mudam
  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const data = await getActorDetails(id); // Busca detalhes do ator pela API
        setActor(data); // Armazena os detalhes do ator no estado
      } catch (error) {
        console.error('Error fetching actor details:', error); // Loga um erro, se houver, ao buscar detalhes do ator
      }
    };

    const fetchActorCredits = async () => {
      try {
        const data = await getActorCredits(id, currentPage); // Busca créditos do ator pela API
        setCredits(data.cast); // Armazena os créditos do ator no estado
        setTotalPages(data.total_pages); // Define o número total de páginas de créditos
      } catch (error) {
        console.error('Error fetching actor credits:', error); // Loga um erro, se houver, ao buscar créditos do ator
      }
    };

    fetchActorDetails(); // Chama a função para buscar detalhes do ator
    fetchActorCredits(); // Chama a função para buscar créditos do ator
  }, [id, currentPage]); // Dependências: reexecuta o efeito quando 'id' ou 'currentPage' mudam

  // Função que altera a página atual de créditos
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Define a nova página atual
  };

  // Se os detalhes do ator ainda não foram carregados, exibe um indicador de carregamento
  if (!actor) return <div>Loading...</div>;

  // Formata a data de nascimento do ator e calcula a idade
  const birthdate = new Date(actor.birthday);
  const age = new Date().getFullYear() - birthdate.getFullYear();

  return (
    <div className="actor-detail-container"> {/* Container principal para os detalhes do ator */}
      <div className="actor-detail-image-container"> {/* Container para a imagem do ator */}
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} // URL da imagem do ator
          alt={actor.name} // Texto alternativo com o nome do ator
          className="actor-detail-image" // Classe para estilização da imagem do ator
        />
      </div>
      <div className="actor-detail-info"> {/* Container para as informações detalhadas do ator */}
        <h2>{actor.name}</h2> {/* Nome do ator */}
        <div className="bio"> {/* Container para a biografia do ator */}
          <p><strong>Nome:</strong> {actor.name}</p> {/* Exibe o nome do ator */}
          <p><strong>Nascimento:</strong> {actor.birthday}</p> {/* Exibe a data de nascimento do ator */}
          <p><strong>Idade:</strong> {age} anos</p> {/* Exibe a idade calculada do ator */}
          <p><strong>Origem:</strong> {actor.place_of_birth}</p> {/* Exibe o local de nascimento do ator */}
        </div>
        <div className="actor-credits-container"> {/* Container para a lista de créditos do ator */}
          <h3>Filmes e Séries</h3> {/* Título da seção de créditos */}
          <div className="actor-credits-list"> {/* Container para a lista de cartões de créditos */}
            {credits.slice(0, 12).map((credit) => ( // Mapeia a lista de créditos para criar elementos visuais
              <div key={credit.id} className="credit-card"> {/* Cartão para cada crédito (filme/série) */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${credit.poster_path}`} // URL da imagem do filme/série
                  alt={credit.title} // Texto alternativo com o título do filme/série
                  className="credit-image" // Classe para estilização da imagem do crédito
                />
                <div className="credit-info"> {/* Container para as informações do crédito */}
                  <p className="credit-title">{credit.title || credit.name}</p> {/* Exibe o título do crédito */}
                  <p className="credit-release-date">{credit.release_date || credit.first_air_date}</p> {/* Exibe a data de lançamento do crédito */}
                </div>
              </div>
            ))}
          </div>
          <div className="pagination"> {/* Container para a navegação por páginas */}
            {Array.from({ length: totalPages }, (_, index) => ( // Cria botões de página baseado no número total de páginas
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)} // Muda para a página clicada
                className={currentPage === index + 1 ? 'active' : ''} // Aplica a classe 'active' ao botão da página atual
              >
                {index + 1} {/* Número da página */}
              </button>
            ))}
            {totalPages > 12 && ( // Se houver mais de 12 páginas, exibe um botão para ir para a próxima página
              <button onClick={() => handlePageChange(currentPage + 1)}>{'>'}</button> // Botão para avançar para a próxima página
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail; // Exporta o componente ActorDetail para ser usado em outras partes da aplicação
