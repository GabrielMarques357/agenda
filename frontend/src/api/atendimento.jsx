import api from "./api"

export const getAtendimento = async () => {
    const response = await api.get('/api/v1/atendimentos')

    if(response.status !== 200){
        return [] 
    }

    return response.data.users
}

export const createAtendimento = async (user) => {
   const response = await api.post('/api/v1/atendimento', user)

   return response
}

export const updateAtendimento = async (id, user) => {
    const response = await api.put(`/api/v1/atendimento/${id}`, user)

    return response
}

export const deleteAtendimento = async (id) => {
    const response = await api.delete(`/api/v1/atendimento/${id}`)

    return response
}

