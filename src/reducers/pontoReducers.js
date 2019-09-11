import pontoActions from '../actions/pontoAction'

export function resumoReducers(state = [], action) {
    switch(action.type){
        case pontoActions.RESUMO_PONTO:
            return action.payload || [];
        default:
            return state;
    }
}

export function saveReducers(state = false, action){
    switch(action.type){
        case pontoActions.ADD_PONTO:
            return action.payload || false; 
        case pontoActions.EDIT_PONTO:
            return action.payload || false;
        default:
            return state;
    }
}

export function tipTarefaReducers(state = [], action) {
    switch(action.type){
        case pontoActions.TIPO_TAREFA:
            return action.payload || [];
        default:
            return state;
    }
}