// Define a chave de API para acessar o serviço de filmes.
// Essa chave é usada para autenticar as requisições feitas à API.
const API_KEY = "bc60c2dc515b93fd83dde3c5fe6f3822";

// Cria um array de objetos que representa diferentes categorias de filmes.
// Cada objeto no array contém informações sobre a categoria, como nome, título, URL do endpoint da API e se as imagens devem ser grandes.
const movieCategories = [
    {
        // Nome da categoria. Pode ser usado internamente no código.
        name: "Ultimos lançamentos",
        
        // Título da categoria. Esse título pode ser usado para exibição na interface do usuário.
        title: "Ultimos lançamentos",
        
        // Caminho para a API que retorna os filmes desta categoria.
        // A URL é construída dinamicamente usando a API_KEY e um endpoint específico para filmes em tendência na semana.
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        
        // Indica se as imagens dos filmes dessa categoria devem ser exibidas em tamanho grande.
        isLarge: true,
    },
    {
        name: "Recomendados",
        title: "Recomendados",
        
        // Caminho para a API que retorna programas de TV recomendados.
        // Neste caso, está filtrando os programas de uma rede específica (id 213).
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        
        isLarge: true,
    },
];

// Exporta o array de categorias para que ele possa ser importado e utilizado em outras partes do projeto.
export default movieCategories;
