const getTask = (sequelize, { DataTypes }) => {
    const task = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });

    task.associate = (databases) => {
        task.hasOne(databases.Employee, { onDelete: 'CASCADE'});
    };

    return task;
};

export default getTask;
