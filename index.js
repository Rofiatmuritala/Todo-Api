import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import todosRoutes from "./routes/todos.routes.js"
import dotenv from "dotenv"


dotenv.config({ path: [".env.local"] });

// create express app
const app = express();

// Apply middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cors());

//Use route

app.use(todosRoutes)
const PORT = process.env.PORT

// Listen for incoming request
app.listen(PORT, () => {
    console.log("Express app is running ")
})
