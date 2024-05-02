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
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    task.associate = (models) => {
        task.belongsTo(models.Employee, { foreignKey: "employeeId" });
    };

    return task;
};

export default getTask;
