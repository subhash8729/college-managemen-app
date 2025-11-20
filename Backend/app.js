import express, { urlencoded } from "express"
import managerRouter from "./routes/manager.routes.js";
import authRouter from "./routes/auth.routes.js";
import db from "./db.js"
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv"
import cors from "cors"
import publicRouter from "./routes/public.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

dotenv.config();
app.use(cors({origin:"http://localhost:5173",credentials:true}));


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400) {
    return res.status(400).json({ message: "Invalid JSON" });
  }
  next();
});
app.use(morgan('dev'))
app.use("/manager",managerRouter);
app.use("/auth", authRouter);
app.use("/public",publicRouter);
app.use("/admin",adminRouter)
// db.end();
app.listen(5001, ()=>{
  console.log("server is running successfully on port 5001")
})
