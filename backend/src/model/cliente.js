import { Sequelize } from "sequelize"
import database from "../config/database.js"

class User {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            },
            senha: {
                type: database.db.Sequelize.STRING
            }
        })

        //this.model.hasMany('atendimento', {})
        //Atendimento.belongsTo
        

    }
   
}

export default new User().model
