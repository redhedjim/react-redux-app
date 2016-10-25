import express from 'express';
console.log("contact route")
import Contact from '../models/contact';
let router = express.Router();

router.get('/:id', (req, res) => {
    Contact.fetch(req.params.id).then(contact => {
    res.json({ contact });
  });
});

export default router;