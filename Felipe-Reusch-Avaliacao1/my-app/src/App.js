import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      temaEscuro: true
    }
  }
  nomeEmpresa = 'Parrilla';

  alternaTema = () => {
    this.setState({
      temaEscuro: !this.state.temaEscuro
    });
  }

  render() {
    return (
      <>
        <Header empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} icon={this.logoIcon} />
        <main>
          <Banner>
            <h2>O que é Parrilla?</h2>
            <p>
            Parrilla é um sistema de grelhas móveis usadas e criadas pelos Uruguaios e Argentinos para preparar carnes. Esse sistema diferentemente das churrasqueiras tradicionais usadas no Brasil, apenas as brasas quando incandescentes são utilizadas para assar as carnes, peixes, frango, ovinos e suínos.
            </p>
          </Banner>
          <Galeria />
        </main>
        <Footer/>
      </>
    );
  }
}