const API_KEY = "bc60c2dc515b93fd83dde3c5fe6f3822"; // Chave de API para acessar o The Movie Database (TMDB)

// Lista de categorias de atores para exibição na aplicação
const actorCategories = [
    {
        name: "Atores", // Nome da categoria
        title: "Atores", // Título a ser exibido
        path: `/trending/person/day?api_key=${API_KEY}&language=en-US`, // Caminho da API para buscar atores em tendência no dia
        isLarge: false, // Define se a categoria deve ser exibida em um formato maior ou menor
    }
];

export default actorCategories; // Exporta as categorias de atores para uso em outros arquivos
