import { api } from '../api/index';
import { type Movie } from '../types';
//criando uma classe MovieService
class MovieService {
  constructor() {}
  //Função assíncrona que busca todos os filmes
  async all(page = 1, pageSize = 24): Promise<Movie[]> {
    //faz a requisição do objeto de resposta ""{data}"" com o get
    try {
      const { data } = await api.get('/movies', {
        //pra trazer poster tem que puxar esse params, mas por padrão campo media não vem
        params: {
          populate: 'poster',
        },
      });
      //Retorna o objeto com todos os filme
      console.log('RETURN DO .ALL()');
      console.log(data.data);
      return data.data;
      //caso não dê certo ele da esse erro
    } catch (e) {
      console.log('não deu certo');
      return Error('Não foi possível carregar');
    }
  }
}

export const movieService = new MovieService();
