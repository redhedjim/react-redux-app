import express from 'express';
import Contact from '../models/contact';
let router = express.Router();


router.get('/', (req, res) => {
  Contact.fetchAll().then(contacts => {
    res.json({ contacts });
  });
});

router.get('/:id', (req, res) => {
  Contact.forge({ id: req.params.id }).fetch().then(contact => {
    res.json({ contact });
  });
});

export default router;