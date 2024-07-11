import "./colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aofavoritar }) => {
  let favoritar = () => {
    aofavoritar(colaborador.id);
  };

	// Objeto passado como propriedade 
  const propsFavorito = {
    size: 30,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        className="deletar"
        //onClick={aoDeletar(colaborador.id)} />
        // OBS (Faltou () => antes de chamar a função, assim ela é executada já sem click)
        onClick={() => aoDeletar(colaborador.id)}
        size={45}
        color=""
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>

      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            // <MdFavorite size={30} onClick={favoritar} color="red" />
            <MdFavorite {...propsFavorito} color="red" /> // Spread 
          ) : (
            <MdFavoriteBorder {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;

// OBS
/*
Adriano, sua resposta está correta, parabéns! O problema com o código apresentado é que a função `aoDeletar` está sendo chamada diretamente, e não passada como uma função anônima (arrow function). Isso faz com que a função seja executada assim que o componente é renderizado, enviando o ID do colaborador e deletando-o imediatamente. Para corrigir isso, você deve passar a função `aoDeletar` como uma arrow function, que será executada apenas quando o evento de clique ocorrer. Dessa forma, o ID do colaborador será enviado apenas quando o usuário clicar no ícone de exclusão, e não no momento da renderização do componente. Sua sugestão de usar `onClick={() => aoDeletar(colaborador.id)}` está correta. Continue assim, demonstrando bom entendimento dos conceitos de React e de como passar corretamente funções como props. Seu progresso é evidente!

No vídeo anterior, tivemos que transformar um evento em uma arrow function para poder passar o 'id' do colaborador como parâmetro, mas por que precisamos fazer isto? não posso simplesmente fazer onClick={aoDeletar(id)}?

No caso acima, o aoDeletar será executado assim que o componente renderizar (pode tentar!) e isto não é o que esperamos! O onClick espera uma função, e ele recebe a execução dessa função, por isto ele executa assim que renderizado!

Para resolver este problema, temos duas formas mais comuns, com a arrow function ou criando uma função no seu componente!
- Arrow Function visto no exemplo acima
- Criando uma função

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    function deletarColaborador() {
      aoDeletar(colaborador.id);
    }
    return (
      <AiFillCloseCircle size={25} className="deletar" onClick={deletarColaborador} />
    )
}

Da segunda forma, criamos uma função, atribuímos um nome à ela e referenciamos ela no evento de click, desta forma damos à ela a responsabilidade de passar o id!
*/
