import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Wallet = db.define(  
  "wallet",  
  { 
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true 
      },
    userUid: { 
      type: DataTypes.INTEGER,  
    }, 
    balance: { 
      type: DataTypes.INTEGER,  
    }, 
    date: { 
      type: DataTypes.DATE,  
    }, 
    refresh_token: {  
      type: DataTypes.TEXT,  
    },  
  },  
  {  
    freezeTableName: true,  
  }  
);  
  
(async () => {  
  await db.sync();  
})();  
  
export default Wallet;
