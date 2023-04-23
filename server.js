const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an instance of the express app
const app = express();

// Set up middleware to parse JSON request bodies
app.use(express.json());

// Set up CORS
app.use(cors());

// Connect to the database
mongoose.connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Check for errors
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to database.");
});

// Create a schema for the to-do list items
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
});

// Create a model for the to-do list items
const Todo = mongoose.model("Todo", todoSchema);

// Handle GET requests to retrieve the to-do list items
app.get("/api/todos", (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(todos);
        }
    });
});

// Handle POST requests to add a new task
app.post("/api/todos", (req, res) => {
    const todo = new Todo({
        task: req.body.task
    });
    todo.save((err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: "Task added successfully." });
        }
    });
});

// Handle PUT requests to update a task
app.put("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    const isCompleted = req.body.isCompleted;
    Todo.findByIdAndUpdate(
        id,
        { isCompleted },
        { new: true },
        (err, todo) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else if (!todo) {
                res.status(404).json({ message: "Task not found." });
            } else {
                res.json({ message: "Task updated successfully." });
            }
        }
    );
});

// Handle DELETE requests to delete a task
app.delete("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id, (err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else if (!todo) {
            res.status(404).json({ message: "Task not found." });
        } else {
            res.json({ message: "Task deleted successfully." });
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
