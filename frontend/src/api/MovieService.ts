import { api } from '../api/index';
import { type Movie } from '../types';
//criando uma classe MovieService
class MovieService {
  constructor() {}
  //Função assíncrona que busca todos os filmes
  async all(page = 1, pageSize = 24): Promise<Movie[]> {
    //faz a requisição do objeto de resposta ""{data}"" com o get
    const { data } = await api.get('/movies', {
      //pra trazer poster tem que puxar esse params, mas por padrão campo media não vem
      params: {
        populate: 'poster',
      },
    });
    //Retorna o objeto com todos os filme
    return data.data;
  }
  //faz a mesma coisa que o all, so que pega um id específico como parâmetro, a função async espera um filme. api.get vai receber um id onde for chamado e vai retornar o filme desse id especifico para ""data""
  async get(id: number): Promise<Movie> {
    const { data } = await api.get(`/movies/${id}`, {
      params: {
        //por padrão o vue não retorna relações, é preciso fazer isso manualmente como aqui
        populate: ['poster', 'comments'],
      },
    });
    return data.data;
  }
}

export const movieService = new MovieService();
