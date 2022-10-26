import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Investcrowd = db.define(  
  "investcrowd",  
  { 
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    amount: { 
      type: DataTypes.INTEGER,  
    }, 
    userUid: { 
      type: DataTypes.INTEGER,  
    },
    borrowUid: { 
      type: DataTypes.INTEGER,  
    }, 
    date: { 
      type: DataTypes.DATE,  
    },
    investUid: { 
      type: DataTypes.INTEGER,  
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
  
export default Investcrowd;
