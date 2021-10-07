import { DataTypes } from "sequelize/types";
import database from "../utils/database";
import sequelize from "../utils/database";

const Scrum = sequelize.define("scrum", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
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
  },
});
