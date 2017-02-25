/**
 *
 * @providesModule ui-actions
 * @flow
 *
 */

import actionTypes from 'action-types';

import type {
  ReduxAction,
  ActionObject
} from 'flow-types';

const uiActions: {[id: string]: ReduxAction} = {
  showLoadingIndicators: (): ActionObject => ({
    type: actionTypes.showLoadingIndicators,
    payload: {}
  }),
  hideLoadingIndicators: (): ActionObject => ({
    type: actionTypes.hideLoadingIndicators,
    payload: {}
  }),
  setLoadingPhrase: (phrase): ActionObject => ({
    type: actionTypes.setLoadingPhrase,
    payload: { phrase: phrase }
  })
};

export default uiActions;
