const getProject = (sequelize, { DataTypes }) => {
    const project = sequelize.define("projects", {
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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    project.associate = (models) => {
        project.belongsTo(models.Employee, { foreignKey: "departmentId" });
    };

    return project;
};

export default getProject;
