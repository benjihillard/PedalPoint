# Pedal Point Backend

Express.js API server for the Pedal Point cycling platform.

## Features

- Express.js server with security middleware
- Health check endpoint
- CORS enabled
- Request logging
- Error handling
- Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp env.example .env
```

3. Update `.env` with your configuration values

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api` - API information

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)

## Project Structure

```
src/
├── controllers/    # Route controllers
├── models/        # Database models
├── routes/        # API routes
├── middleware/    # Custom middleware
├── services/      # Business logic
├── utils/         # Utility functions
└── server.js      # Main server file
``` 