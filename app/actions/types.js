/**
 *
 * @providesModule action-types
 * @flow
 *
 */

import type { ReduxActionType } from 'flow-types';

const actionTypes: {[id: string]: ReduxActionType} = {
  initialize: 'initialize',
  finalize: 'finalize'
};

export default actionTypes;
