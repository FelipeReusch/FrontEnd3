import { Component } from 'react';
import { Formik, Form, Field } from '../../../aula-14_buscaCEP/my-app/node_modules/formik/dist';
import Swal from 'sweetalert2';
import api from './service/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get(`/users/FelipeReusch/repos`);
      this.setState({ repositorios: response.data });
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  handleSubmit = async ({ nomeUsuario }) => {
    if (nomeUsuario !== '') {
      try {
        const response = await api.get(`/users/${nomeUsuario}/repos`);
        this.setState({ repositorios: response.data });
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
            <h2>Procure um usuário do Github</h2>
            <Formik initialValues={{ nomeUsuario: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.repositorios && (
              <ol>
                {this.state.repositorios.map(({ id, name, html_url }) => {
                  return (
                    <li key={id}>
                      <a target="_blank" href={html_url} rel="noreferrer">
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ol>
            )}
          </div>
        </main>
      </>
    );
  }
}