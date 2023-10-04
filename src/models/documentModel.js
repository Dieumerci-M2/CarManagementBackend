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
const document = db.define( 'document', {
        plaque: {
            type: DataTypes.STRING,
            allowNull : false 
        },
        nomProp: {
            type: DataTypes.STRING,
            allowNull : false 
        },
        photoProp: {
            type: DataTypes.STRING,
            default: 'https://res.cloudinary.com/md-chatapp-mern/image/upload/v1668690954/ti1nbpcrxaevqp9fjiks.jpg' 
        },
        photoVehicule: {
            type: DataTypes.STRING,
            allowNull : false 
        },
        assurance: {
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        vignette: {
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        carteRose: {
            type: DataTypes.BOOLEAN,
            allowNull : false  
        },
        permiDeConduire: {
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        controleTechnique: {
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        vitreTinte: {
            type: DataTypes.BOOLEAN,
            allowNull : false
    },
    marque: {
        type: DataTypes.STRING,
        allowNull : false
        }
    })

export default document 