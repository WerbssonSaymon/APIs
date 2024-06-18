import calamity from "../api/calamitys.js"

export const getCalamity = (request, response) => {
    response.send(calamity)
}

export const getCalamityById = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
     const getDataSigla = calamity.find((calamityData) => calamityData.sigla === siglaInfo);

     if (!getDataSigla) {
       response.status(404).send('erro');
       return;
     }

     response.status(200).send(getDataSigla);
}

export const updateCalamity = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
     const regionSelected = calamity.find((region) => region.sigla === siglaInfo);

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

export const addCalamity = (request, response) => {
    const newCalamity = request.body;
         Calamity.push(newCalamity);
         response.status(200).send(newCalamity);
}

export const deleteCalamityById = (request, response) => {
    const siglaInfo = request.params.sigla.toUpperCase();
         const indexSigla = calamity.findIndex(
             (region) => region.sigla === siglaInfo
         );
    
         if (indexSigla === -1) {
            return response.status(404).send({
                 error: 'Região não encontrada' 
             });
         }
    
         const calamityRemove = calamity.splice(indexSigla, 1);
         response.status(200).send(calamity);
}