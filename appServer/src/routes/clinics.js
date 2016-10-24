import express from 'express';
import Clinic from '../models/clinic';

let router = express.Router();

router.get('/', (req, res) => {
    Clinic.fetchAll().then(clinics => {
        res.status(200).json({ message: null, clinics: clinics });
    })
});

export default router;