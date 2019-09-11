import { createAction } from '../actions/createActions';
import CONSTANT from "../utils/constants";

const urlApi = `${CONSTANT.baseUrl}/tipoTarefa`;

export class TipoTarefaService {

    static get(dispatch, action) {
        fetch(`${urlApi}`)
            .then(response => response.json())
            .then((data) => 
                dispatch(createAction(action, data)) 
            );
    }
}