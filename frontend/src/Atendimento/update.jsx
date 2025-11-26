import { useState } from "react"
import { createUser } from "../api/users";
import { useNavigate } from "react-router-dom";
import './styles.css'

const INITIAL_STATE = {
        dia: '',
        hora: '',
        valor: '',
        cloncluido: true
}

export default function CreateUser() {

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
        []
    )
}