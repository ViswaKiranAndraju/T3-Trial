import express from 'express';
import { createTimeLog, getTimeLogs } from '../controllers/timeController.js';
const router = express.Router();
router.post('/', createTimeLog);
router.get('/', getTimeLogs);
export default router;
