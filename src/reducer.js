// import * as actionTypes from './actionTypes'
import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes'


// const state = []
let lastId = 0

// function reducer(state=[], action) {                // OK -> export default reducer OR export { reducer }
// export default function reducer(state=[], action) { // OK -> import reducer from './reducer'

/******************** Not Available! ********************/
// export default const reducer = (state=[], action) => {
/********************************************************/
// export const reducer = (state=[], action) => {      // OK -> import { reducer } from './reducer'
const reducer = (state=[], action) =>{                 // OK -> export default reducer OR export { reducer }

    // if (action.type === 'bugAdded')
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resolved: false
    //         }
    //     ]
    // else if (action.type === 'bugResolved')
    //     return state.map(bug => bug.id === action.payload.id ? { ...bug, resolved: true } : bug)
    // else if (action.type === 'bugRemoved')
    //     return state.filter(bug => bug.id !== action.payload.id)
    // return state
    ////////////////////////////////////////////////////////////
    switch (action.type) {
        // case actionTypes.BUG_ADDED:
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
            break
        // case actionTypes.BUG_RESOLVED:
        case BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id ? { ...bug, resolved: true } : bug )
            break
        // case actionTypes.BUG_REMOVED:
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
            break
        default:
            return state
    }

}


/****** Not Available! ******/
// export default { reducer }
// export reducer
/****************************/

export default reducer // OK -> import reducer from './reducer'
// export { reducer }     // OK -> import { reducer } from './reducer'


/**
 * export default: BEFORE 'class','function' and <variable> (NOT 'const', 'let')
 * export: BEFORE 'class', 'function', 'const', 'let' and { <variable(s)> }
 */