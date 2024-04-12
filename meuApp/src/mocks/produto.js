import jogadores_jogo from '../../assets/jogadores.png';
import idiomas_jogo from '../../assets/idiomas.png';
import genero_jogo from '../../assets/genero.png';

const produto = {
    topo: {
        titulo: "Detalhes do Produto",
    },
    detalhes: {
        nome: "Kirby and The Forgotten Land",
        detalhes: "Embarque em uma aventura totalmente nova como a poderosa bolinha, Kirby. Explore livremente em fases 3D enquanto descobre um mundo misterioso com estruturas abandonadas de uma civilização passada - como um shopping center?! Copie as habilidades dos inimigos, como o novo Drill e Ranger, e use-as para atacar, explorar seus arredores e salvar os Waddle Dees sequestrados do feroz Beast Pack ao lado do misterioso Elfilin.",
        preco: "R$ 299,90",
        botao: "Adicionar na lista de desejos",
    },
    itens:{
        titulo: "Especificações do jogo",
        lista: [
            {
                jogadores: "2 Jogadores Co-Op",
                imagem: jogadores_jogo,
            },
            {
                idiomas: "Alemão, Chinês Simplificado, Chinês Tradicional, Coreano, Espanhol, Francês, Holandês, Inglês, Italiano, Japonês",
                imagem: idiomas_jogo,
            },
            {
                genero: "Plataforma",
                imagem: genero_jogo
            }
        ]
    }
}

export default produto;