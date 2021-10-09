import sequelize from "../utils/database"
import {DataTypes} from "sequelize"

import Team from './team'
const User = sequelize.define("user", {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
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
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.belongsTo(Team, {
  foreignKey: 'teamId'
})

export default User
