const getPosition = (sequelize, {DataTypes}) => {
    const position = sequelize.define('position', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        salary: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });

    return position;
};
