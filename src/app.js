import express from 'express' // importar o express
import routes from './routes.js'

const app = express() //criar instância

app.use(express.json()) //ler body com json

app.use(routes) //usar o router


export default app

/*
A linha app.use(express.json())
deve ser chamada antes da linha app.use(routes)
POR QUE? Porque o Router é um middleware, e a ordem que eles são chamados no programa importa muito. 
Se chamarmos o app.use(express.json()) depois das rotas, as requisições de post, update não saberão como ler o json.
*/


//buscar seleção por id -> :id é um parametro dentro da requisição
/*
app.get('/selecoes/:id', (req, res) => {
    //res.json(buscarSelecao(req.params.id))
    const id = req.params.id
    const sql = "SELECT * FROM table_teste WHERE id=?;"
    conexao.query(sql, id, (error, result) =>{
        const linha = result[0]
        if (error) {
            res.status(404).json({'error': error})
        } else {
            res.status(200).json(linha)
        }
    })
})
*/

/*
funçao auxiliar para buscar as seleçoes por id

function buscarSelecao (id) {
    return selecoes.filter(selecao => selecao.id == id)
    //o retorno dessa função sera um objeto, se o id da selecao for igual ao que estamos buscando
}

funçao auxiliar para buscar as seleçoes a partir do id

function buscarIdSelecao (id) {
    return selecoes.findIndex(selecao => selecao.id == id)
    //o retorno dessa função sera a posição do elemento no array
}
*/
