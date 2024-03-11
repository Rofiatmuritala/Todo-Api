import { Router } from "express";

const router = Router();

// Define routes
router.post('/todos', (req,res) => {
    res.json(req.body);
});

router.get('/todos', (req, res) => {
    res.send('Get all todos!');
});

router.delete('/todos', (req, res) => {
    res.send('Delete all todos!');
});

router.get('/todo/:id', (req, res) => {
    res.send(   `Get todo with id: ${req.params.id}`);
})

router.patch('/todo/:id', (req, res) => {
    res.send(`Update todo with id: ${req.params.id}`);
})

router.delete('/todo/:id', (req, res) => {
    res.send(`Delete todo with id: ${req.params.id}`);
})

// Export router
export default router;