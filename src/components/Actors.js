// src/components/Actors.js

import React, { useEffect, useState } from 'react'; // Importa React, useEffect e useState para criar e gerenciar o estado do componente e efeitos colaterais
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegar programaticamente entre as rotas
import { getActors } from '../api'; // Importa a função getActors que faz a chamada à API para buscar os atores
import './Actors.css'; // Importa o arquivo CSS para estilização do componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente para exibir ícones
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importa ícones específicos de chevron para navegação

// Constante que define o host das imagens dos atores
const imageHost = "https://image.tmdb.org/t/p/original/";

// Componente Actors que exibe uma lista de atores com navegação entre eles
const Actors = () => {
  const [actors, setActors] = useState([]); // Estado que armazena a lista completa de atores
  const [displayedActors, setDisplayedActors] = useState([]); // Estado que armazena os atores exibidos na tela
  const [page, setPage] = useState(1); // Estado que controla a página atual da API
  const navigate = useNavigate(); // Hook para navegação programática

  // Função assíncrona para buscar os atores da API com base no número da página
  const fetchActors = async (pageNumber) => {
    try {
      const data = await getActors(pageNumber); // Chama a API para obter os atores
      setActors(prevActors => [...prevActors, ...data.results]); // Adiciona os novos atores ao estado
    } catch (error) {
      console.log("Error fetching actors: ", error); // Loga o erro, se houver, ao buscar atores
    }
  };

  // useEffect para buscar os atores sempre que a página mudar
  useEffect(() => {
    fetchActors(page); // Chama fetchActors quando a página muda
  }, [page]);

  // useEffect para atualizar os atores exibidos na tela sempre que a lista completa de atores mudar
  useEffect(() => {
    setDisplayedActors(actors.slice(0, 5)); // Exibe os primeiros 5 atores da lista
  }, [actors]);

  // Função que lida com a navegação para a esquerda na lista de atores
  const handlePrev = () => {
    const container = document.querySelector('.actors-list'); // Seleciona o container da lista de atores
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Rola a lista para a esquerda suavemente
  };

  // Função que lida com a navegação para a direita na lista de atores
  const handleNext = () => {
    const container = document.querySelector('.actors-list'); // Seleciona o container da lista de atores
    container.scrollBy({ left: 300, behavior: 'smooth' }); // Rola a lista para a direita suavemente

    // Se o usuário chegar ao final da lista, carrega mais atores
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      setPage(prevPage => prevPage + 1); // Incrementa o número da página
      setDisplayedActors(actors.slice(0, displayedActors.length + 5)); // Exibe mais 5 atores
    }
  };

  // Função que lida com o clique em um ator, navegando para a página de detalhes do ator
  const handleActorClick = (id) => {
    navigate(`/actor/${id}`); // Navega para a rota de detalhes do ator com base no ID
  };

  return (
    <div className="actors-container"> {/* Container principal para o componente de atores */}
      <h2>Celebridades</h2> {/* Título da seção */}
      <div className="nav-buttons"> {/* Container para os botões de navegação */}
        <button className="nav-button prev" onClick={handlePrev}> {/* Botão para navegar para a esquerda */}
          <FontAwesomeIcon icon={faChevronLeft} /> {/* Ícone de seta para a esquerda */}
        </button>
        <button className="nav-button next" onClick={handleNext}> {/* Botão para navegar para a direita */}
          <FontAwesomeIcon icon={faChevronRight} /> {/* Ícone de seta para a direita */}
        </button>
      </div>
      <div className="actors-list"> {/* Container para a lista de cartões de atores */}
        {displayedActors.map((actor) => ( // Mapeia a lista de atores exibidos para criar elementos visuais
          <div
            key={actor.id}
            className="actor-card" // Classe para estilização do cartão de ator
            onClick={() => handleActorClick(actor.id)} // Evento de clique no cartão de ator
          >
            <img
              src={`${imageHost}${actor.profile_path}`} // URL da imagem do ator
              alt={actor.name} // Texto alternativo com o nome do ator
              className="actor-image" // Classe para estilização da imagem do ator
            />
            <p className="actor-name">{actor.name}</p> {/* Nome do ator exibido abaixo da imagem */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors; // Exporta o componente Actors para ser usado em outras partes da aplicação
