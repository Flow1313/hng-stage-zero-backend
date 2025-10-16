# Stage Zero Backend Task - HNG Internship

A Node.js/Express API that returns user data with dynamic cat facts from external APIs.

## 🚀 Live Demo
- **API Endpoint:** `https://hng-stage-zero-backend.railway.internal`
- **Health Check:** `https://hng-stage-zero-backend-production.up.railway.app/health`
- **Root Endpoint:** `https://hng-stage-zero-backend-production.up.railway.app/`

## 📋 API Documentation

### GET /me
Returns JSON data with user information and a random cat fact.

**Response Format:**
```json
{
  "status": "success",
  "user": {
    "email": "talk2ibb2003@gmail.com",
    "name": "Bello Ibrahim",
    "stack": "Node.js, Express, MongoDB"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats can jump up to 6 times their length."
}
