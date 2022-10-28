import { Sequelize } from "sequelize";   
import db from "../config/Database.js";   
   
const { DataTypes } = Sequelize;   
   
const wallet = db.define(   
  "wallet",   
  {  
    useruid: {   
      type: DataTypes.INTEGER,   
    },   
    balance: {   
      type: DataTypes.INTEGER,   
    },   
    date: {  
      type: DataTypes.DATE,   
    },  
  },   
  {   
    freezeTableName: true,   
  }   
);   
   
(async () => {   
  await db.sync();   
})();   
   
export default wallet;
