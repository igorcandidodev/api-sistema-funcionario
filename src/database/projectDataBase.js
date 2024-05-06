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
        }
    }, { timestamps: false });

    project.associate = (databases) => {
        project.hasMany(databases.Employee),
        project.belongsTo(databases.Department)
    };

    return project;
};

export default getProject;
