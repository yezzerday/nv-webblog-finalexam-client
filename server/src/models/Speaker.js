module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        model: DataTypes.STRING,
        brand: DataTypes.STRING, 
        watt:DataTypes.STRING,
        poer_input: DataTypes.STRING,
        status: DataTypes.STRING,  
        type: DataTypes.STRING 
    })
    return Camera
}