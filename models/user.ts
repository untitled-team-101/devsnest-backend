import database from "../utils/database"
import {DataTypes} from "sequelize"

const user = database.define("user",{
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default user

// User.belongsTo(Company, {foreignKey: 'fk_company'}); // Adds fk_company to User
