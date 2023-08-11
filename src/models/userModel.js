import db from "../../config/configDb.js"
import { DataTypes } from "sequelize"

const userModel =  db.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcremente: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: `Le nom a déjà était Authentifier`
            },
            validate:{
                notEmpty: {msg: `Veillez entre un nom d'utilisateur svp`},
                notNull: {msg: `Le nom d'utilisateur doit contenir aumoins 2 caractères`}
                }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: `nom d'utilisateur ou mot de passe incorrect`
            },
            validate:{
                notEmpty: {msg: `Veillez Entrer un mot de passe svp`},
                notNull: {msg: `Le mot de passe doit contenir aumoins 8 caractères`}
                }
        } 
    },
    {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
    })


export default userModel