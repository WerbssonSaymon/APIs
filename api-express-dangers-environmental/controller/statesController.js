import state from "../api/states.js";

export const getState = (request, response) => {
    response.send(state);
}

export const getStateById = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
    const getDataSigla = state.find((stateData) => stateData.sigla === siglaInfo);

         if (!getDataSigla) {
            response.status(404).response.send('erro');
            return;
         }

    response.status(200).send(getDataSigla);
}

export const updateState = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
    const regionSelected = state.find((region) => region.sigla === siglaInfo);

     if (!regionSelected) {
        return response.status(404).send({
            error: 'Região não encontrada'
        });
     }

     const campos = Object.keys(request.body);
     campos.forEach((campo) => {
         regionSelected[campo] = request.body[campo];
     });

     response.status(200).send(regionSelected);
}

export const addState = (request, response) => {
    const newState = request.body;
     state.push(newState);
     response.status(200).send(newState);
}

export const deleteStateById = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
     const indexSigla = state.findIndex(
         (region) => region.sigla === siglaInfo
     );

     if (indexSigla === -1) {
         return response.status(404).send({
             error: 'Região não encontrada' 
         });
     }

     const regionRemove = state.splice(indexSigla, 1);
     response.status(200).send(state);
}