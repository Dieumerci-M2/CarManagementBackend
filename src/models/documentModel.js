import db from "../../config/configDb.js"
import { DataTypes } from "sequelize"

const document = db.define( 'document', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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