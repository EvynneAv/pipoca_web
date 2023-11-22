import { api } from '../api/index';
import { useUserStore } from '../stores/userStore';
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
  //função de deletar, utiliza a userstore pra authorizar a deleção
  //mando o id do filme que quero apagar, depois recebo os dados do filme apagado em {data}
  async delete(id: number): Promise<Movie> {
    const userStore = useUserStore();
    const { data } = await api.delete(`/movies/${id}`, {
      //tenho que mandar esse cabeçário, se não a requisição não é authorizada
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
    });
    return data.data;
  }
}

export const movieService = new MovieService();
