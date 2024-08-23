import * as AddActions from './action'

interface ItemCount{
    count: number
} 
const defaultState: ItemCount = {
 count: 0
}
export type AddAction = AddActions.All
export function productReducer(state: ItemCount = defaultState, action: AddAction){
    switch(action.type){
        case 'ADD':
            const updateState: ItemCount = {
                count : state.count + ((action && action.payload !== undefined ) ? action.payload :  0)
            }
            state = Object.assign({}, state, updateState);
            return state;
        default:
            return state;

    }
}