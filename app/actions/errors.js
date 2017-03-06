/**
 * errors.js: Ações referentes a erros de comunicação
 *
 * Este módulo define ações auxiliares que ajudam no gerenciamento do estado
 * de erro da aplicação. Especificamente, o estado de erro precisa ser
 * manipulado para que seja possível tentar novamente carregar o conteúdo do app
 * em caso de falha de acesso à rede.
 *
 * @providesModule error-actions
 * @flow
 *
 */

import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const errorActions: {[id: string]: ReduxAction} = {
  clearErrors: (): ActionObject => ({
    type: actionTypes.clearErrors,
    payload: {}
  })
};

export default errorActions;

