import 'react-native';
import createReducer from 'create-reducer';

it('creates reducers from action handlers', () => {
  const initialState = {
    value: 0
  };
  
  const handler1 = (state, action) => {
    return { value: state.value + action.value };
  };

  const handler2 = (state, action) => {
    return { value: state.value - action.value };
  };

  const handlers = {
    increment: handler1,
    decrement: handler2
  };

  const reducer = createReducer(initialState, handlers);

  const state1 = reducer(initialState,
                         {type: 'increment',
                          value: 10
                         });

  const state2 = reducer(state1,
                         {type: 'decrement',
                          value: 5
                         });

  expect(state1.value).toBe(10);
  expect(state2.value).toBe(5);
});
