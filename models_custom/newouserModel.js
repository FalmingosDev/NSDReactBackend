module.exports = (sequelize, DataTypes) => {
    const newo_users = sequelize.define('newo_users', {
        name: {
            type: DataTypes.STRING
        },
        parent_id: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.STRING
        },
        country_code: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        profile_pic: {
            type: DataTypes.STRING
        },
        Otp: {
            type: DataTypes.STRING
        },
        referral_code: {
            type: DataTypes.STRING
        },
        wallet_coin: {
            type: DataTypes.INTEGER
        },
        active_date: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.BOOLEAN
        },
        created_ts: {
            type: DataTypes.DATE
        }
    },{
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });

    return newo_users
} 
