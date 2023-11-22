import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type User } from '../types';

// Criando o store
// store é um local único onde o app armazena informações sobre determinadas coisas como o usuário, a store so pode ser modificada de forma não assincrona e é readonly, caso queiramos modifica-la, solicitamos a ela
// o retorno da função abaixo vai ser uma função, o que for variável é
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({} as User);
  //token tbm fica visível na store
  const token = computed(() => user.value.jwt);

  function logout() {
    console.log('APAGOU!');
    user.value = {} as User;
  }
  //tenho que retornar aqui, se não esses dados não ficam visiveis, tanto as funções quanto as variáveis
  return { user, logout, token };
});
