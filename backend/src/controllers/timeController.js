import TimeLog from '../models/TimeLog.js';

export const createTimeLog = async (req, res) => {
    try {
        const timeLog = await TimeLog.create(req.body);
        res.status(201).json(timeLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTimeLogs = async (req, res) => {
    try {
        const logs = await TimeLog.findAll();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
