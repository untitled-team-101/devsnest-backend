import {DataTypes} from "sequelize";
import sequelize from "../utils/database";

const Team = sequelize.define("team", {
  teamId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batchLeader: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
})

export default Team;
