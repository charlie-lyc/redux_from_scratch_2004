// console.log('Hello World')

import store from './store'
// import { BUG_ADDED, BUG_REMOVED } from './actionTypes'
import { bugAdded, bugRemoved, bugResolved } from './actionCreators'


// console.log(store)
/***************************************************************************/
// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// @@observable: ƒ observable()
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// [[Prototype]]: Object
/***************************************************************************/

/** Start Listening to the Store Changes **/
const unsubscribe = store.subscribe(() => 
    console.log('Store changed!:', store.getState())
)


// store.dispatch({
//     // type: 'bugAdded',
//     type: BUG_ADDED,
//     payload: {
//         description: 'Bug 1'
//     }
// })
// console.log(store.getState())
/////////////////////////////////////////////////
store.dispatch(bugAdded('Bug 1'))


// store.dispatch({
//     // type: 'bugResolved',
//     type: BUG_RESOLVED,
//     payload: {
//         id: 1
//     }
// })
// console.log(store.getState())
/////////////////////////////////////////////////
store.dispatch(bugResolved(1))


/** Stop Listening to Store Changes **/
unsubscribe() 


// store.dispatch({
//     // type: 'bugRemoved',
//     type: BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
// console.log(store.getState())
/////////////////////////////////////////////////
store.dispatch(bugRemoved(1))
console.log(store.getState())