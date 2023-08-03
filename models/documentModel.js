const document = ( sequilize, DataTypes ) => {
    return sequilize.define( 'document', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIcremente: true
        },
        plaque: {
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
        }
    })
}

export default document