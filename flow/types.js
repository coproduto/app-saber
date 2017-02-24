/**
 *
 * @providesModule flow-types
 *
 */

//estado
export type ReduxState = Object;

//ações
export type ReduxActionType = string;
export type ReduxAction = { type: ReduxActionType, payload: Object };

//redutores
export type ReduxReducer = (ReduxState, ReduxAction) => ReduxState;
