import { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } from './actionTypes'


export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: { description }
}) 

export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: { id }
})

export const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload: { id }
})