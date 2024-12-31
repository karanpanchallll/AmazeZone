import Products from "./models/productsSchema.js";
import productsdata from "./constant/productsdata.js"

const DefaultData =async ()=>{
    
    
    try{
        await Products.deleteMany({});
        const storeData= await Products.insertMany(productsdata)
        console.log(storeData);
    }catch(error){
        console.log("error:" + error.message);
    }
}

export default DefaultData;