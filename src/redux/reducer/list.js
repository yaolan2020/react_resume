import {listInit} from './../initState.js';
import {list_add,list_remove} from './../initFun.js';
import createReducer from './../createReducer.js'

let list = createReducer(listInit,{'list_add':list_add,'list_remove':list_remove})

export default list