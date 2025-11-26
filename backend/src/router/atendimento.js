import express from 'express'
import ControllerAtentimento from '../controller/atendimento.js'
import authMiddleware from '../middleware/authatend.js'

const router = express.Router()

//router.post('/login', ControllerAtentimento.Login)

router.get('/atendimento/context', authMiddleware(), ControllerAtentimento.FindOne)
router.post('/atendimento/', ControllerAtentimento.Create)
router.put('/atendimento/', authMiddleware(), ControllerAtentimento.Update)
router.delete('/atendimento/', authMiddleware(), ControllerAtentimento.Delete)

router.get('/atendimentos', authMiddleware([]), ControllerAtentimento.FindAll)
router.get('/atendimento/:id', authMiddleware([]), ControllerAtentimento.FindOne)
router.post('/atendimento/admin', authMiddleware([]), ControllerAtentimento.Create)
router.put('/atendimento/:id', authMiddleware([]), ControllerAtentimento.Update)
router.delete('/atendimento/:id', authMiddleware([]), ControllerAtentimento.Delete)

export default router