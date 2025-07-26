import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './db.js';

// Import routes
import employeeRoutes from './routes/employee.js';
import projectRoutes from './routes/project.js';
import taskRoutes from './routes/task.js';
import timeLogRoutes from './routes/time.js';
import screenshotRoutes from './routes/screenshot.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/employees', employeeRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/time-logs', timeLogRoutes);
app.use('/screenshots', screenshotRoutes);

// Health check
app.get('/', (req, res) => res.send('T3 Time Tracking API is running'));

// DB connection
sequelize.authenticate()
    .then(() => console.log('✅ Connected to MySQL'))
    .catch(err => console.error('❌ DB Connection Error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

sequelize.authenticate()
    .then(() => {
        console.log('✅ Connected to MySQL');
        return sequelize.sync({ alter: true }); // Auto-create tables
    })
    .then(() => console.log('📦 Models synced'))
    .catch(err => console.error('❌ DB Connection Error:', err));
