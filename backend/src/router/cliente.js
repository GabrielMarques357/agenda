import express from 'express'
import ControllerCliente from '../controller/cliente.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerCliente.Login)

router.get('/cliente/context', authMiddleware(), ControllerCliente.FindOne)
router.post('/cliente/', ControllerCliente.Create)
router.put('/cliente/', authMiddleware(), ControllerCliente.Update)
router.delete('/cliente/', authMiddleware(), ControllerCliente.Delete)

router.get('/clientes', authMiddleware([]), ControllerCliente.FindAll)
router.get('/cliente/:id', authMiddleware([]), ControllerCliente.FindOne)
router.post('/cliente/admin', authMiddleware([]), ControllerCliente.Create)
router.put('/cliente/:id', authMiddleware([]), ControllerCliente.Update)
router.delete('/cliente/:id', authMiddleware([]), ControllerCliente.Delete)

export default router