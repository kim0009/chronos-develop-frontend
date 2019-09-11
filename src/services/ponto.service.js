import { createAction } from '../actions/createActions';
import CONSTANT from "../utils/constants";

const urlApi = `${CONSTANT.baseUrl}/ponto`;
const  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export class PontoService {
    
    static get(dispatch, action) {
        fetch(`${urlApi}/buscar`)
            .then(response => response.json())
            .then((data) => 
                dispatch(createAction(action, data)) 
            );
    }

    static save(entity, dispatch, action) {
        fetch(`${urlApi}`,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(entity)
        })
        .then(response => response.json())
        .then((data) => 
            dispatch(createAction(action, data)) 
        );
    }
}
