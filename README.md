# create-immutable-reducer

Create a redux reducer from an object of action handling functions, keyed by the actions they handle.
Has validates for Immutable state.

```js
const createReducer = require('create-immutable-reducer');
const { fromJS } = require('immutable');

const initialState = fromJS({
  first: 1,
  second: 2,
});

module.exports = createReducer({
  ACTION_TYPE_CHANGE_FIRST(state, action) {
    return state.set('first', action.first);
  },

  ACTION_TYPE_CHANGE_SECOND(state, { second }) {
    return state.set('second', second);
  },
}, initialState);
```
