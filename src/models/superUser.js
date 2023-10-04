// Import bcrypt
import bcrypt from "bcrypt"
// Call Data base configuration
import db from "../../config/configDb.js"
// Import DataTypes to five type to the Model elements
import { DataTypes } from "sequelize"
/**
 * We use Define() sequelize's methode to create a Dta Base Table
 * This contain tree parameters, the first is the name of the table
 * After giving the Table's name Sequelize will ad an 's' to that table's name
 * The third parameter is optonal.. It give the extra information of the table
 * like the Timestamp, created at, updated at ect.
 * As you will see, the second argument is an object containing the names of the
 * rows as keys and their types as values. Secondly, we can say whether this line
 * can take a null value or not, with allownull as the key and a Boolean as the value.
 */
const superUserModel = db.define('superuser',{
    
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: `Le nom a déjà était Authentifier`
            },
            validate:{
                notEmpty: {msg: `Veillez entre un nom d'utilisateur svp`},
                notNull: {msg: `Les points de vue sont une propiétés réquise`}
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
        updatedAt: false
    } )
    
superUserModel.beforeCreate( superuser => {
    return bcrypt.hash( superuser.password, 10 )
        .then( hash => {
            superuser.password = hash
        } )
        .catch( err => {
            throw new Error()
        })
    } )


export default superUserModel