const getEmployee = (sequelize, {DataTypes}) => {
    const employee = sequelize.define('employees', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            unique: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });

    employee.associate=(databases) => {
        employee.belongsTo(databases.Position),
        employee.belongsTo(databases.Department),
        employee.belongsTo(databases.Project),
        employee.belongsTo(databases.Supervisor),
        employee.belongsTo(databases.Task)
    }
    
    return employee;
}

export default getEmployee;