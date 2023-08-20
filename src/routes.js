import { Router } from "express";
import tableController from './app/controllers/tableController.js'

const router = Router()


//ROTAS
router.get('/selecoes', tableController.index) //listar tudo
router.get('/selecoes/:id', tableController.show) //selecionar por id
router.post('/selecoes', tableController.store) //adiconar 
router.delete('/selecoes/:id', tableController.delete) //deletar
router.put('/selecoes/:id', tableController.update) //atalizar

export default router
