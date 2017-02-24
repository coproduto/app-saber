/**
 *
 * Os módulos de ações são basicamente declarativos e não definem código, então
 * só testamos se todas as ações declaradas têm tipos válidos.
 *
 * Os efeitos das ações são testados nos testes de redutores.
 *
 */

import actions from 'actions';
import actionTypes from 'action-types';

it('only has actions with valid types', () => {
  let actionTypeList = [];

  //construímos uma lista de todos os tipos válidos...
  for (const type in actionTypes) {
    if(actionTypes.hasOwnProperty(type)) {
      actionTypeList.push(actionTypes[type]);
    }
  }

  //e verificamos se todas as ações têm tipos válidos.
  for (const action in actions) {
    if(actions.hasOwnProperty(action)) {
      expect(actionTypeList).toContain(actions[action]().type);
    }
  }
});

 

 
