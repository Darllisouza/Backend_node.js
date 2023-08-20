
import tableRepository from '../repositories/tableRepository.js'

class tableController {
        async index (req, res) {
            //res.status(200).send(selecoes)
            const linha = await tableRepository.findAll()
            res.json(linha)
        } 
        async show(req, res) {
            const id = req.params.id
            const linha = await tableRepository.findById(id)
            res.json(linha)
        } 

        async store(req, res) {
             //selecoes.push(req.body) //conteudo 
            //res.status(201).send("Seleçao Cadastrada com sucesso!")
            const selecao = req.body
            const linha = await tableRepository.create(selecao)
            res.json(linha)

        } 
        async update (req, res) {
            /*
            let index = buscarIdSelecao (req.params.id)
            selecoes[index].selecao = req.body.selecao
            selecoes[index].grupo = req.body.grupo 
            res.json(selecoes)
            */
            const id = req.params.id
            const selecao = req.body
            const linha = await tableRepository.update(selecao,id)
            res.json(linha)

        }

        async delete(req, res) {
            /*
            let index = buscarIdSelecao (req.params.id)
            selecoes.splice(index, 1)
            res.send(`Seleção com id ${req.params.id} excluida!`)
            */
            const id = req.params.id
            const linha = await tableRepository.delete(id)
            res.json(linha)
            

        } 

}

//padrão Singleton
export default new tableController()