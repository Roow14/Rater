const API_KEY = "bc60c2dc515b93fd83dde3c5fe6f3822"; // Chave de API para acessar o The Movie Database (TMDB)

// Função para obter filmes de uma categoria específica
export const getMovies = async (path) => {
    try {
        const url = `https://api.themoviedb.org/3${path}`; // Monta a URL completa com a rota fornecida
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching movies: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter a lista de atores em tendência na semana
export const getActors = async (page = 1) => {
    try {
        const url = `https://api.themoviedb.org/3/trending/person/week?api_key=${API_KEY}&page=${page}&language=en-US`; // Monta a URL completa para obter atores
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching actors: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter detalhes de um filme específico
export const getMovieDetail = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`; // Monta a URL com o ID do filme para obter os detalhes
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching movie details: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter o elenco de um filme específico
export const getMovieCredits = async (movieId) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`; // Monta a URL para obter o elenco do filme
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching movie credits: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter filmes semelhantes a um filme específico
export const getSimilarMovies = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=pt-BR`; // Monta a URL para obter filmes semelhantes
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching similar movies: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter detalhes de um ator específico
export const getActorDetails = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`; // Monta a URL para obter detalhes de um ator
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching actor details: ", error); // Loga o erro no console, caso ocorra
    }
};

// Função para obter créditos (filmes/séries) associados a um ator específico
export const getActorCredits = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${API_KEY}&language=en-US`; // Monta a URL para obter os créditos do ator
        const response = await fetch(url); // Faz a requisição à API
        return await response.json(); // Converte e retorna a resposta em formato JSON
    } catch (error) {
        console.log("Error fetching actor credits: ", error); // Loga o erro no console, caso ocorra
    }
};

// Lista de categorias de filmes para exibição na aplicação
const categories = [
    {
        name: "Ultimos lançamentos", // Nome da categoria
        title: "Ultimos lançamentos", // Título a ser exibido
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`, // Caminho da API para buscar filmes dessa categoria
        isLarge: true, // Define se a categoria deve ser exibida em um formato maior
    },
    {
        name: "Recomendados", // Nome da categoria
        title: "Recomendados", // Título a ser exibido
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // Caminho da API para buscar filmes dessa categoria
        isLarge: true, // Define se a categoria deve ser exibida em um formato maior
    },
];

export default categories; // Exporta as categorias para uso em outros arquivos
