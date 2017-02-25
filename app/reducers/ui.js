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
  })
};

export default uiReducers;
