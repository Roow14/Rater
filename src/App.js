import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'; // Importa o arquivo de estilos para a aplicação
import Header from './components/Header'; // Importa o componente de cabeçalho
import Row from './components/Row'; // Importa o componente que exibe uma linha de filmes
import Banner from './components/Banner'; // Importa o componente de banner
import categories from './api'; // Importa as categorias de filmes a partir da API configurada
import Actors from './components/Actors'; // Importa o componente que exibe uma lista de atores
import ActorDetail from './components/ActorDetail'; // Importa o componente que exibe os detalhes de um ator
import MovieDetailPage from './pages/MovieDetailPage'; // Importa a nova página de detalhes do filme
import 'slick-carousel/slick/slick.css'; // Importa os estilos do carrossel (slick-carousel)
import 'slick-carousel/slick/slick-theme.css'; // Importa o tema do slick-carousel
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {categories.map((category) => (
                  <Row
                    key={category.name}
                    title={category.title}
                    path={category.path}
                    isLarge={category.isLarge}
                  />
                ))}
                <Actors />
              </>
            }
          />
          <Route path="/actor/:id" element={<ActorDetail />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
