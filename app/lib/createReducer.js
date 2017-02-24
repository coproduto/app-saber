/**
 * createReducer.js: Função de criação de redutores
 *
 *     Este arquivo define uma função que simplifica o processo de criação de
 *     redutores na arquitetura Redux.
 *
 *     Um redutor é uma função que recebe um estado e uma ação, e a partir dessa
 *     ação gera um novo estado.
 *
 *     Aqui criamos um novo redutor através da combinação de uma série de
 *     funções, cada uma das quais lida apenas com um tipo de ação, permitindo
 *     a criação de redutores complexos de forma altamente modular.
 *
 *
 * @providesModule create-reducer
 *
 **/

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
