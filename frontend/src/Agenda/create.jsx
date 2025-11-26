import { useState } from "react"
import { createUser } from "../api/clientes";
import { useNavigate } from "react-router-dom";
//import './styles.css'

const INITIAL_STATE = {
        nome: '',
        email: '',
        senha: '',
        ativo: true
}

export default function CreateCliente() {

    const navigate = useNavigate()

    const [user, setUser] = useState(INITIAL_STATE)

    const handlChange = (e) => {
        const {id, value} = e.target;
        setUser({
            ...user,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createUser(user)
        
        if(response.status === 201) {
            navigate('/users')
        } else {
            console.log(response)
        }
    }

    const handlReset = (e) => {
        e.preventDefault()
        setUser(INITIAL_STATE)
    }

    return (
        <main>

            <form>

            <div>
                <label>Nome: </label>
                <input type="text" name="nome" id='nome' value={user.nome} onChange={handlChange}></input>
            </div>

            <div>
                <label>Email: </label>
                <input type="email" name="email" id='email' value={user.email} onChange={handlChange}></input>
            </div>

            <div>
                <label>Senha: </label>
                <input type="password" name="senha" id='senha' value={user.senha} onChange={handlChange}></input>
            </div>

            <button type="reset" onClick={handlReset}>Limpar</button>
            <button type="submit" onClick={handleSave}>Enviar</button>

            </form>

        </main>
    )
}