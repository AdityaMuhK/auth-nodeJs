import { Sequelize } from "sequelize";  
import db from "../config/Database.js";  
  
const { DataTypes } = Sequelize;  
  
const Borrowcrowd = db.define(  
  "borrowcrowd",  
  { 
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    title: {  
      type: DataTypes.TEXT,  
    },  
    descrip: {  
      type: DataTypes.TEXT,  
    },  
    category: {  
      type: DataTypes.TEXT,  
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
     
    collect: { 
      type: DataTypes.INTEGER,  
    },
    logo: { 
      type: DataTypes.TEXT,  
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
  
export default Borrowcrowd;
