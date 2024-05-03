const getSupervisor = (sequelize, { DataTypes }) => {
  const supervisor = sequelize.define("supervisors", {
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
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  supervisor.associate = (models) => {
    supervisor.hasOne(models.Department, { foreignKey: "supervisorId" });
  };

  return supervisor;
};

export default getSupervisor;
