import {DataTypes} from "sequelize";
import sequelize from "../utils/database";
import User from "./user";

const Scrum = sequelize.define("scrum", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  attendance: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  thaCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  thaLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  backlog: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sawClass: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

Scrum.belongsTo(User, {
  foreignKey: 'userId'
})

export default Scrum;
