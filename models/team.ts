import {DataTypes} from "sequelize";
import sequelize from "../utils/database";

const Team = sequelize.define("team", {
  teamId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batchLeader: {
    type: DataTypes.STRING,
    allowNull: true
  },
})

export default Team;
