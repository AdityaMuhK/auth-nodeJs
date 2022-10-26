import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Invest = db.define(  
  "invest",  
  { 
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    amount: { 
      type: DataTypes.INTEGER,  
    }, 
    borrowUid: { 
      type: DataTypes.INTEGER,  
    }, 
    userUid: { 
      type: DataTypes.INTEGER,  
    },
    investUid: { 
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
  
export default Invest;
