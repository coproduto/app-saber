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
 * @flow
 *
 **/

import type {
  ReduxActionType,
  ReduxState,
  ReduxAction,
  ReduxReducer
} from 'flow-types';

type HandlerMap = { [id: ReduxActionType]: ReduxReducer };

function createReducer(initialState: any,
                       handlers: HandlerMap): ReduxReducer {
  return function reducer(state: any = initialState,
                          action: ReduxAction): ReduxState {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

export default createReducer;
