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
  }, { timestamps: false });

  department.associate = (databases) => {
    department.hasMany(databases.Employee);
    department.hasMany(databases.Project, { onDelete: 'CASCADE'});
  };

  return department;
};

export default getDepartment;
