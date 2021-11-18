import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './service/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      enderecos: {}
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get(`localhost:8080`);
      this.setState({ enderecos: response.data});
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  handleSubmit = async ({ cep }) => {
    if (cep !== '') {
      try {
        const response = await api.get(`${cep}`);
        this.setState({ enderecos: response.data });
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        });
      }
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um Endereço pelo CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="number" name="cep" id="cep" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.enderecos && (
            <ul>
              <li>CEP: {this.state.enderecos.cep}</li>
              <li>Rua: {this.state.enderecos.street}</li>
              <li>Bairro: {this.state.enderecos.neighborhood}</li>
              <li>Cidade: {this.state.enderecos.city}</li>
              <li>Estado: {this.state.enderecos.state}</li>
              <li>Serviço: {this.state.enderecos.service}</li>
            </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}