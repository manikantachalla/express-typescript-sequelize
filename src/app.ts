import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;