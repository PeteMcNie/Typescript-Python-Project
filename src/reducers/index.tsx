import { UpdatePerson } from '../actions'
import { StoreState } from '../types/index'
import { ADD_PERSON, REMOVE_PERSON } from '../constants/index'

export function people(state: StoreState, action: UpdatePerson): StoreState {
    switch (action.type) {
        case ADD_PERSON:
            console.log('Reducer state ADD: ', state, action.name)
             return { ...state, people: [...state.people, action.name] }
        // case REMOVE_PERSON:
        //     console.log('Reducer state remove: ', state)
        //     return { ...state, people: action.name }
        default:
            state
    }
    return state
}
