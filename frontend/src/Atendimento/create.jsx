import { useState } from "react"
import { createUser } from "../api/atendimento";
import { useNavigate } from "react-router-dom";
//import './styles.css'

const INITIAL_STATE = {
        dia: '',
        hora: '',
        valor: '',
        concluido: true
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
            navigate('/atendimentos')
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
                <label>Dia: </label>
                <input type="text" name="dia" id='nome' value={user.dia} onChange={handlChange}></input>
            </div>

            <div>
                <label>Hora: </label>
                <input type="email" name="hora" id='email' value={user.hora} onChange={handlChange}></input>
            </div>

            <div>
                <label>Valor: </label>
                <input type="text" name="valor" id='senha' value={user.valor} onChange={handlChange}></input>
            </div>

             <div>
                <label>Concluido: </label>
                <input type="text" name="concluido" id='senha' value={user.concluido} onChange={handlChange}></input>
            </div>

            <button type="reset" onClick={handlReset}>Limpar</button>
            <button type="submit" onClick={handleSave}>Enviar</button>

            </form>

        </main>
    )
}