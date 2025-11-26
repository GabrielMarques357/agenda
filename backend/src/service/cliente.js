import User from '../model/cliente.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 // 12

class ServiceCliente {

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

    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCrip,

        })
    }

    async Update(id, nome, senha) {
        const oldUser = await User.findByPk(id)
        

        oldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldUser.senha

        
    }

    async Delete(id) {
        const oldUser = await User.findByPk(id)

        oldUser.destroy()
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const user = await User.findOne({ where: { email } })

        if (
            !user
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            { id: user.id, nome: user.nome, permissao: user.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()