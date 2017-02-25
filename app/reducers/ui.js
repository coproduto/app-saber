/**
 *
 * @providesModule ui-reducers
 *
 */

import createReducer from 'create-reducer';
import types from 'action-types';

const uiReducers = {
  loadingIndicators: createReducer(false, {
    [types.showLoadingIndicators] () {
      return true;
    },
    [types.hideLoadingIndicators] () {
      return false;
    }
  }),
  loadingPhrase: createReducer("", {
    [types.setLoadingPhrase] (state, action) {
      return action.payload.phrase;
    }
  })
};

export default uiReducers;
