import express from 'express'
import router from './router/cliente.js';
import routeratendimento from './router/atendimento.js'
import Database from './config/database.js'
import DatabaseAte from './config/atendbase.js'
import cors from 'cors'
import e from 'express';

const app = express();

app.use(express.json())

app.use(cors())

app.use('/api/v1', router)
app.use('/api/v1', routeratendimento)

const port = 3000

Database.db
    .sync({ force: false })

    .then((_)=>{
        app.listen(port, () => {
        console.log("Servidor rodando na porta " +port)
        })
    })
    
    .catch((e)=>{
        console.log("Não foi possivel conectar com o banco"+ e)
    })

DatabaseAte.db
    .sync({ force: false })

    .then((_)=>{
        app.listen(port, () => {
        console.log("Servidor rodando na porta " +port)
        })
    })
    
    .catch((e)=>{
        console.log("Não foi possivel conectar com o banco"+ e)
    })

