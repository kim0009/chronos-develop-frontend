import pontoActions from '../actions/pontoAction'

export function resumoReducers(state = [], action) {
    switch(action.type){
        case pontoActions.RESUMO_PONTO:
            return action.payload || state;
        default:
            return state;
    }
}

export function saveReducers(state = false, action) {
    switch(action.type){
        case pontoActions.ADD_PONTO:
            return action.payload || state; 
        case pontoActions.EDIT_PONTO:
            return action.payload || state;
        default:
            return state;
    }
}

export function tipTarefaReducers(state = [], action) {
    switch(action.type){
        case pontoActions.TIPO_TAREFA:
            return action.payload || state;
        default:
            return state;
    }
}