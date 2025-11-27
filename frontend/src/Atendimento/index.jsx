import { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../api/clientes'
import { Link, useNavigate } from 'react-router-dom'
//import './styles.css'
import { toast } from 'react-toastify'
import { getAtendimento } from '../api/atendimento'

function Clientes() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    const handleUpdate = async (user) => {
        navigate('/update/atendimento', { state: { user } })
    }

    const handleDelete = async (id) => {
        const response = await deleteUser(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setUsers(users => users.filter(user => user.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allUsers = await getAtendimento()
            setUsers(allUsers)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='user-list'>
                <div>
                    <Link to={'/create/atendimento'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div className='user header' key='header'>
                    <label>Dia</label>
                    <label>Hora</label>
                    <label>Valor</label>
                    <label>Concluido</label>
                </div>
                {
                         users.map(user =>
                            <div className='user' key={user.id}>
                                <label>{user.dia}</label>
                                <label>{user.hora}</label>
                                <label>{user.valor}</label>
                                <label>{user.concluido}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(user)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(user.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Clientes
