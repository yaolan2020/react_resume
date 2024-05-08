//redux公用函数

function list_add(state,action){
    return state.concat([action.text])
}
function list_remove(state,action){
    state.splice(action.text,1);
    return state;
}
function counter_add(state,action){
    return state+1;
}
function counter_remove(state,action){
    return state-1;
}

export {list_add,list_remove,counter_add,counter_remove}