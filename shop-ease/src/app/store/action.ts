import { Action } from "@ngrx/store";

export const ADD_ITEM = 'ADD';
export class AddItem implements Action{
    readonly type: string = ADD_ITEM;
    constructor(public payload?: number){}
}

export type All = AddItem;