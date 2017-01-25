import express from 'express';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
    /*Route not set up yet*/
    res.status(201).json({ 
        success: true, 
        message: "Event created successfully" 
    });
});

export default router;