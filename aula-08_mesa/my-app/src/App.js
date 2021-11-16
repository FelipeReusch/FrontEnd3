import { Component } from 'react';
import './App.scss';


export default class Lista extends Component {
  listaInicial = [
        {
          id: 0,
          nome: 'Refrigerante',
          imagem: "https://static.clubeextra.com.br/img/uploads/1/414/19804414.jpg"
        },
        {
          id: 1,
          nome: 'Cerveja',
          imagem: "https://a-static.mlcdn.com.br/1500x1500/cerveja-spaten-lata-350ml-pack-12-unidades/distribuidoravitalli/1097p/b3263ba80001d69ef17d60270b302e32.jpg"
        },
        {
          id: 2,
          nome: 'Picanha',
          imagem: "https://espetinhodesucesso.com.br/wp-content/uploads/2017/09/espetinho-de-picanha-dicas-1200x709.jpg"
        },
      ]

  constructor(){
    super();
    this.state = {
        produtos: this.listaInicial
    }
}

remover = id => {
    const listaNova = this.state.produtos.filter(produto => produto.id !== id)
    this.setState({
        produtos: listaNova
    })
}

restore = () => {
    this.setState({
        produtos:this.listaInicial
    })
}
render() {
    return (
        <>
        <button className = 'restart-btn' onClick={this.restore}>Restaurar a lista</button>
        <ul className = 'list'>
            {
                this.state.produtos.map(({id,imagem,nome})=> {
                   return (
                     <li onClick={() => this.remover(id)}>
                        <img src={imagem} alt={nome}/>
                        <h3>{nome}</h3>
                     </li>                               
                   ) 
                })
            }
        </ul>
        </>
    )
}
}