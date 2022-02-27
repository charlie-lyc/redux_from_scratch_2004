# Redux from Scratch
Learning [Redux](https://github.com/reduxjs/redux) for state management of simple bugs registry.


## Work Flow

- Design the store
- Define the actions <props> type, payload
- Create a reducer <arguments> state, action
- Set up the store


## Package Structure

- dist
    - index.html
- src
    - reducer.js
    - store.js : createStore()
    - index.js : dispatch(), getState(), subscribe(), unsubscribe()
    - actionTypes.js
    - actionCreators.js
- webpack.config.js