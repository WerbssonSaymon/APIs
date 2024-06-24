export const getWelcome = (request, response) => {
    response.send(`
        Bem vindo a minha API </br>
        </br>
        Acesse as seguintes rotas: </br>
        </br>
        -> /api/estados </br>
        -> /api/calamidades
    `)
}