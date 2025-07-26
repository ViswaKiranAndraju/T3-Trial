import Screenshot from '../models/Screenshot.js';

export const createScreenshot = async (req, res) => {
    try {
        const screenshot = await Screenshot.create(req.body);
        res.status(201).json(screenshot);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getScreenshots = async (req, res) => {
    try {
        const screenshots = await Screenshot.findAll();
        res.json(screenshots);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
