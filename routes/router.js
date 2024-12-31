import express from "express";
const router =new express.Router();
import Products from "../models/productsSchema.js"
import USER from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import authenticate from "../middleware/authenticate.js";


//get product data api
router.get("/getproducts",async(req,res)=>{
    try {
        const productsdata=await Products.find()
        //console.log("console the data:" + productsdata)
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error:"+ error.message);
    }
})

//get individual data api
router.get("/getproductsone/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const productdata= await Products.findOne({id:id})
        res.status(201).json(productdata)

    } catch (error) {
        res.status(400).json(productdata)
        console.log("error:"+ error.message);
    }
})

//register data
router.post("/register", async (req,res)=>{
   // console.log(req.body);
    const {fname , email, mobile , password , cpassword }=req.body
    if(! fname || ! email || ! mobile || ! password || !cpassword){
        res.status(422).json({error :"fill all the details"})
        console.log("No data is available")
    };
    
    try {
        const preUser = await USER.findOne({email:email});
        if(preUser){
            res.status(422).json({error:"This email is already present "})
        }else if(password!== cpassword){
            res.status(422).json({error:" Confirm Password doesnot match"})
        }else{
            const finalUser = new USER({
                fname , email, mobile , password , cpassword
            });
            
            // password hashing
            


            const storeData =await finalUser.save();
            console.log(storeData);
            res.status(201).json(storeData);
        }
    } catch (error) {
        
    }

})

// login user api
router.post("/login",async (req,res)=>{
    const {email , password}=req.body
    if (!email || !password){
        res.status(400).json({error:"fill all the details to log In"})
    }
    try {
        const userLogin =await USER.findOne({email:email})
        console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)
            //console.log(isMatch);
            
            //token generation
            const token = await userLogin.generateAuthToken()
            //console.log(token);

            //cookie generation
            res.cookie("Amazonweb", token, {
                expires: new Date(Date.now() + 900000), // 15 minutes
                httpOnly: true, // Restricts client-side access
                secure: false, // Use true in production with HTTPS
                sameSite: "lax", // Allows cookies on same-origin and top-level navigation
              });
            //console.log(req.cookies)
            

            if(!isMatch){
                res.status(400).json({error:"password doesnot match"})
            }else{
                res.status(201).json({userLogin})
            }
        }else{
            res.status(400).json({error:"user not registered"})
        }
    } catch (error) {
        res.status(400).json({error:"invalid details"})
    }

})

// adding data to the cart

router.post("/addcart/:id",authenticate,async(req,res)=>{
    try {
        const {id}=req.params;
        const cart=await Products.findOne({id:id});
        console.log(cart + "cart value")

        const userContact =await USER.findOne({_id:req.userId})
        console.log(userContact);

        if(userContact){
            const cartData =await userContact.addCartData(cart);
            await userContact.save();
            console.log(cartData);

            res.status(201).json(userContact)
        }else{
            res.status(401).json({error:"invalid user"});
        }



    } catch (error) {
        res.status(401).json({error:"invalid user"});
    }
})

//get cart  details

router.get("/cartdetails",authenticate,async(req,res)=>{
   try {
    const buyUser = await USER.findOne({_id:req.userId});
    res.status(201).json(buyUser);

   } catch (error) {
    console.log("error" + error)
   }
})
//get valid user

router.get("/validuser",authenticate,async(req,res)=>{
    try {
     const validUser = await USER.findOne({_id:req.userId});
     res.status(201).json(validUser);
 
    } catch (error) {
     console.log("error" + error)
    }
 })

// delete item from the cart

router.delete("/remove/:id",authenticate,async(req,res)=>{
    try {
        const {id}=req.params;
        req.rootUser.carts=req.rootUser.carts.filter((current_value)=>{
            return current_value.id != id;
        });
        req.rootUser.save()
        res.status(201).json(req.rootUser)
        console.log("item remove")
    } catch (error) {
        console.log("error"+ error)
        res.status(400).json(req.rootUser)
    }
})

//for user logout
router.get("/logout",authenticate,(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((current_element)=>{
            return current_element.token !==req.token
        });

        res.clearCookie("Amazonweb",{path:"/"});
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens)
        console.log("user logout")
    } catch (error) {
        console.log("error for the user logout")
    }
})

export default router;