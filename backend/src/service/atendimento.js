import User from '../model/atendimento.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 // 12

class ServiceAtendimento {

    async FindAll() {
        return User.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return user
    }

    async Create(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor) {
            throw new Error("favor preencher todos os campos")
        }

        //const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await User.create({
            dia,
            hora,
            valor,
            concluido: "Não"

        })
    }

    async Update(id, dia, hora, valor, concluido) {
        const oldUser = await User.findByPk(id)
        

        oldUser.dia = dia
        oldUser.hora = hora
        oldUser.valor = valor
        oldUser.concluido = concluido 
        
    }

    async Delete(id) {
        const oldUser = await User.findByPk(id)

        oldUser.destroy()
    }

    
}

export default new ServiceAtendimento()