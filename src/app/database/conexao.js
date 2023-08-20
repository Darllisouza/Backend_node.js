import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: "root",
    password: '15072021dd',
    database: 'bdteste'
})

conexao.connect()
/**
 * executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {atring=id ou [selecao, id]} valores a serem passados p o sql
 * @param {string} mensagemRegect mensage a ser exibida
 * @returns objeto da promisse
 */
export const consulta = (sql, valores="", mensagemRegect) =>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
           if (error) return reject( mensagemRegect)
           const rows = JSON.parse(JSON.stringify(result))
           return resolve(rows)
       })
   })
}


export default conexao