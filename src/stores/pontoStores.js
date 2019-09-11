import { resumoReducers, saveReducers, tipTarefaReducers } from "../reducers/pontoReducers";
import { createStore, combineReducers } from "redux";
// import { applyMiddleware } from "redux";
// import thunkMiddleware from 'redux-thunk';

export const rootReducers = combineReducers({
    resumoReducers, 
    saveReducers,
    tipTarefaReducers
});
// export const pontoStore = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export const pontoStore = createStore(rootReducers);