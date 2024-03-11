import express from "express";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos.routes.js"

// create express app
const app = express();

// Apply middlewares
app.use(bodyParser.json())

//Use route

app.use(todosRoutes)

// Listen for incoming request
app.listen(4000, () => {
    console.log("Express app is running!")
})
