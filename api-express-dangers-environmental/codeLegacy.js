// app.get('/api/estados/:sigla', (request, response) => {
//     const siglaInfo = request.params.sigla.toUpperCase();
//     const getDataSigla = state.find((stateData) => stateData.sigla === siglaInfo);

//         if (!getDataSigla) {
//             response.status(404).response.send('erro');
//             return;
//         }

//     response.status(200).send(getDataSigla);
// });

// app.put('/api/estados/:sigla', (request, response) => {
//     const siglaInfo = request.params.sigla.toUpperCase();
//     const regionSelected = state.find((region) => region.sigla === siglaInfo);

//     if (!regionSelected) {
//         return response.status(404).send({
//              error: 'Região não encontrada'
//             });
//     }

//     const campos = Object.keys(request.body);
//     campos.forEach((campo) => {
//         regionSelected[campo] = request.body[campo];
//     });

//     response.status(200).send(regionSelected);
// });

// app.post('/api/estados/', (request, response) => {
//     const newState = request.body;
//     state.push(newState);
//     response.status(200).send(newState);
// })

// app.delete('/api/estados/:sigla', (request, response) => {
//     const siglaInfo = request.params.sigla.toUpperCase();
//     const indexSigla = state.findIndex(
//         (region) => region.sigla === siglaInfo
//     );

//     if (indexSigla === -1) {
//         return response.status(404).send({
//             error: 'Região não encontrada' 
//         });
//     }

//     const regionRemove = state.splice(indexSigla, 1);
//     response.status(200).send(state);
// })


// // rota de API com app.route()

// app.route('/api/calamidades/')
//   .get((request, response) => {
//     response.send(calamity)
//     });

// app.route('/api/calamidades/:sigla')
//   .get((request, response) => {
//     const siglaInfo = request.params.sigla.toUpperCase();
//     const getDataSigla = calamity.find((calamityData) => calamityData.sigla === siglaInfo);

//     if (!getDataSigla) {
//       response.status(404).send('erro');
//       return;
//     }

//     response.status(200).send(getDataSigla);
//    })
//   .put((request, response) => {
//     const siglaInfo = request.params.sigla.toUpperCase();
//     const regionSelected = calamity.find((region) => region.sigla === siglaInfo);

//     if (!regionSelected) {
//         return response.status(404).send({
//              error: 'Região não encontrada'
//             });
//     }

//     const campos = Object.keys(request.body);
//     campos.forEach((campo) => {
//         regionSelected[campo] = request.body[campo];
//     });

//     response.status(200).send(regionSelected);
//     })
//   .post((request, response) => {
//         const newCalamity = request.body;
//         Calamity.push(newCalamity);
//         response.status(200).send(newCalamity);
//     })
//   .delete((request, response) => {
//         const siglaInfo = request.params.sigla.toUpperCase();
//         const indexSigla = calamity.findIndex(
//             (region) => region.sigla === siglaInfo
//         );
    
//         if (indexSigla === -1) {
//             return response.status(404).send({
//                 error: 'Região não encontrada' 
//             });
//         }
    
//         const calamityRemove = calamity.splice(indexSigla, 1);
//         response.status(200).send(calamity);
//     })