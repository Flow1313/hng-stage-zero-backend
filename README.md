# Stage Zero Backend Task - HNG Internship

A Node.js/Express API that returns user data with dynamic cat facts from external APIs.

## 🚀 Live Demo
- **API Endpoint:** `https://hng-stage-zero-backend-production.up.railway.app/me`
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


GET /health
Health check endpoint to verify API status.

Response:

json
{
  "status": "OK",
  "timestamp": "2025-10-16T12:34:56.789Z"
}
GET /
Root endpoint with API information.

Response:

json
{
  "message": "Server is running!",
  "endpoints": {
    "me": "GET /me - Get user info with cat facts",
    "health": "GET /health - Health check"
  }
}
🛠️ Local Development
Prerequisites
Node.js (v18 or higher)

npm

Installation & Setup
Clone the repository

bash
git clone https://github.com/Flow1313/hng-stage-zero-backend.git
cd hng-stage-zero-backend
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Test the API
Server runs on http://localhost:3000

Test endpoints:

bash
# Test main endpoint
curl http://localhost:3000/me

# Test health check
curl http://localhost:3000/health

# Test root endpoint
curl http://localhost:3000/
Production Start
bash
npm start
📁 Project Structure
text
hng-stage-zero-backend/
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── Procfile              # Railway deployment configuration
├── README.md             # Project documentation
└── .gitignore           # Git ignore rules
📦 Dependencies
Production
express: Web framework

axios: HTTP client for API requests

Development
nodemon: Auto-restart server for development

🔧 Deployment
This project is deployed on Railway with automatic deployments from the main branch.

Deployment Configuration:

Procfile: web: node app.js

Port: process.env.PORT (Railway automatically sets this)

Runtime: Node.js

🐛 Features & Error Handling
✅ RESTful API with JSON responses

✅ Integration with Cat Facts API (https://cat-fact.herokuapp.com/facts/random)

✅ Fallback to secondary API (https://catfact.ninja/fact)

✅ Local backup facts if external APIs fail

✅ Proper error handling with consistent response format

✅ Health check endpoint for monitoring

✅ CORS enabled

✅ Dynamic port binding for cloud deployment

👨‍💻 Author
Bello Ibrahim

Email: talk2ibb2003@gmail.com

GitHub: Flow1313

Backend Stack: Node.js, Express, MongoDB

📄 License
This project is developed for the HNG Internship Stage Zero Backend Task.
