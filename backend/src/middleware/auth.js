import jwt from 'jsonwebtoken'
import ServiceCliente from '../service/cliente.js'
const JWT_SEGREDO = "M3uS3gr3d0"

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']
            if(!token) {
                throw new Error("Você não tem permissão para realizar esta ação.")
            }
            const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)

            const user = await ServiceCliente.FindOne(decoded.id)

            if(
                roles.length && 
                !roles.includes(user.permissao)
            ) {
                throw new Error("Você não ter permissão para realizar esta ação")
            }

            req.headers.user = user
            next()
        } catch (erro) {
            res.status(403).send({
                data: null,
                msg: erro.message,
                error: true
            })
        }
    }
}