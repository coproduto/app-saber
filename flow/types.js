/**
 *
 * @providesModule flow-types
 *
 */

//estado
export type ReduxState = Object;

//ações
export type ReduxActionType = string;
export type ActionObject = { type: ReduxActionType, payload: Object };
export type ReduxAction = () => ActionObject;

//redutores
export type ReduxReducer = (ReduxState, ReduxAction) => ReduxState;
