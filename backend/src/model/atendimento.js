import Atendbase from "../config/atendbase.js"

class User {
    constructor() {
        this.model = Atendbase.db.define('atendimento', {
            id: {
                type: Atendbase.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: Atendbase.db.Sequelize.STRING
            },
            hora: {
                type: Atendbase.db.Sequelize.STRING
            },
            valor: {
                type: Atendbase.db.Sequelize.STRING
            }, 
            concluido: {
                type: Atendbase.db.Sequelize.INTEGER
            }
        })
        
    }
   
}

export default new User().model
