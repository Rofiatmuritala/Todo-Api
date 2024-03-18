import { Router } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const router = Router();
dotenv.config({ path: [".env.local"] });
// visited npmjs.com to see how to use mongodb

const url = process.env.MONGO_URL;

const client = new MongoClient(url);
const todoDb = "todo-db";
const todoCollection = "todos";

// Define routes
router.post("/todos", async (req, res) => {
  // Connect mongodb client
  await client.connect();
  // Get access to todo database
  const db = client.db(todoDb);
  // Get access to todos collection
  const collection = db.collection("todos");
  // Add todo document to todos collection
  const insertOneResult = await collection.insertOne({
    ...req.body,
    isCompleted: false,
    createdAt: new Date(),
  });
  // Disconnect mongodb client

  await client.close();
  // Return response
  res.json(insertOneResult);
});

router.get("/todos", async (req, res) => {
  // connect mongodb client
  await client.connect();
  // get access to todo database
  const db = client.db(todoDb);
  // get access to do todos collection
  const collection = db.collection("todos");
  // find all todos from todos collection
  const limit = parseInt(req.query.limit) || 5;
  const findResult = await collection.find({}).limit(limit).toArray();
  // disconnect mongodb client
  await client.close();
  res.send(findResult);
});

router.delete("/todos", async (req, res) => {
  await client.connect();
  const db = client.db(todoDb);
  const collection = db.collection("todos");
  const deleteManyResult = await collection.deleteMany({});
  await client.close();
  res.send(deleteManyResult);
});

router.get("/todo/:id", (req, res) => {
  res.send(`Get todo with id: ${req.params.id}`);
});

router.patch("/todo/:id", (req, res) => {
  res.send(`Update todo with id: ${req.params.id}`);
});

router.delete("/todo/:id", (req, res) => {
  res.send(`Delete todo with id: ${req.params.id}`);
});

// Export router
export default router;
