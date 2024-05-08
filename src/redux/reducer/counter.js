import {counterInit} from './../initState.js';
import {counter_add,counter_remove} from './../initFun.js';
import createReducer from './../createReducer.js'

let counter = createReducer(counterInit,{'counter_add':counter_add,'counter_remove':counter_remove})

export default counter