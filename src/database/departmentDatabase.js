const getDepartment = (sequelize, { DataTypes }) => {
  const department = sequelize.define("departments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  department.associate = (models) => {
    department.belongsTo(models.Employee, { foreignKey: "managerId" });
  };

  return department;
};

export default getDepartment;
