import express from 'express';
import { createScreenshot, getScreenshots } from '../controllers/screenshotController.js';
const router = express.Router();
router.post('/', createScreenshot);
router.get('/', getScreenshots);
export default router;
