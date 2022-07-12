module.exports = (sequelize, DataTypes) => {
    const country_list = sequelize.define('country_list', {
        Name: {
            type: DataTypes.STRING
        },
        Code: {
            type: DataTypes.STRING
        },
        ISD: {
            type: DataTypes.STRING
        }
    });

    return country_list
}