
import {consulta} from '../database/conexao.js'


class tableRepository {

    findAll() { //listar tudo
        const sql = "SELECT * FROM bdteste.table_teste;"
        return consulta(sql, "Não foi possivel localizar!")
    }
        /* 1 
        const sql = "SELECT * FROM bdteste.table_teste;"
        conexao.query(sql, (error, result) =>{
            if (error) {
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
            }
        })
        */
              /* 2
       //Açao assincrona - o tempo de resposta varia, não é garantido
        promise - solicitação pode ser resolvida ou não
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) =>{
                if (error) return reject("Não foi possivel localizar") 
                //transformar dados q estamos recebendo da requisição
                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
        */

    findById(id){ //listar por id
        const sql = "SELECT * FROM table_teste WHERE id=?;"
        return consulta(sql, id, "Não foi possivel localizar!")
    }

    create(selecao) { //inserir
        const sql = "INSERT INTO table_teste SET ?;"
        return consulta(sql, [selecao, id], "Não foi possivel cadastrar!")
    }

    update (selecao,id) { //atualizar
        const sql = "UPDATE table_teste SET ? WHERE id=?;"
        return consulta(sql, valores="selecao", "Não foi possivel atualizar!")
    }

    delete (id) { //deletar
        const sql = "DELETE FROM table_teste WHERE id=?;"
        return consulta(sql, id, "Não foi possivel deletar!")
    }
}
export default new tableRepository()