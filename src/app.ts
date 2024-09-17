import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';
import { setupSwagger } from './swagger';

const app = express();

setupSwagger(app);

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;