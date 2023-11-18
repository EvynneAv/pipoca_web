import { api } from '../api';
import { type User } from '../types';
import { useUserStore } from '../stores/userStore';
//serviço de autenticação
class AuthenticationService {
  constructor() {}

  //o strapi não puxa o papel logo quando busca uma auth no backend, por isso temos que primeiro tentar buscar o usuário com o email e a senha que ele fornecer onde esse service for chamado. Começamos essa busca na função login e depois usamos getRole pra buscar o papel do usuário e terminamos na mesma função login

  //
  async login(identifier: string, password: string): Promise<User> {
    //função de login onde inserimos a identificação do usuário e a senha, no nosso caso a identificação é o email
    // fazemos o try catch na parte de fora
    const { data } = await api.post('/auth/local', {
      // fazemos esse post com essa url e o identifier e password, caso esses dados estiverem no banco {data} vai ser preenchido com o objeto usuário
      identifier,
      password,
    });

    const user = { ...data.user, jwt: data.jwt };
    //aqui faço um spread de data e pego o objeto User e o token e guardo em user
    user.role = await this.getRole(user);
    //aqui eu pego o papel através da url '/users/me' na parte de type

    const userStore = useUserStore();
    //aqui to criando uma store pro usuário

    userStore.user = user;
    //aqui preencho essa store com o usuário
    //--
    // a partir daqui é só uma gambiarra enquanto n se usa o pinia
    // -----
    localStorage.setItem('role', user.role);
    localStorage.setItem('username', user.username);
    // -----

    //aqui eu retorno o usuario, o token e o papel dele
    return user;
  }
  //função que pega o papel do usuário
  //é private pq eu quero usar essa função só aqui dentro
  private async getRole(user: User) {
    const { data } = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
      params: {
        //requisitando o papel
        populate: 'role',
      },
    });

    return data.role.type;
  }
}
export const authenticationService = new AuthenticationService();
