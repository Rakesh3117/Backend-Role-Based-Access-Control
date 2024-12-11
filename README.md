# Authentication and Role-Based Access Control (RBAC) System

## **Project Overview**
This project implements a secure and efficient system for authentication and role-based authorization. The primary features include:

1. **User Authentication**:
   - Registration: Users can create accounts securely.
   - Login: Users can authenticate with their credentials.
   - Logout: Sessions are invalidated securely.
   - JWT-based session management ensures stateless and secure authentication.

2. **Role-Based Access Control (RBAC)**:
   - Users are assigned roles (e.g., Admin, User, Moderator).
   - Each role is granted specific permissions to access resources or endpoints.
   - Access to resources is determined dynamically based on the user's role.

3. **Security Best Practices**:
   - Password hashing using secure algorithms (e.g., bcrypt).
   - JSON Web Tokens (JWT) for session handling.
   - Middleware to enforce RBAC and protect routes.

---

## Features

- **User Authentication**:
  - Register new users with hashed passwords.
  - Secure login with JWT token generation.
- **Role-Based Authorization**:
  - Access control for specific routes based on user roles.
  - Middleware to handle JWT validation and role checks.
- **Scalable Architecture**:
  - Organized folder structure for scalability and maintainability.
- **Secure Implementation**:
  - Password hashing using **bcrypt.js**.
  - JWT tokens with expiry for session management.

### **Role-Based Authorization**
- Roles: `Admin`, `User`, `Moderator`.
- Admin: Full access to all resources.
- Moderator: Access to moderate content but limited administrative permissions.
- User: Restricted access to general resources.

### **Middleware**
- **Authentication Middleware**: Validates JWT tokens for secure route access.
- **Authorization Middleware**: Checks user roles and permissions before granting access.

---

## **Technologies Used**
- **Backend**: Node.js with Express
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB
- **Security**:
  - `bcrypt` for password hashing
---

## **Getting Started**

### **Prerequisites**
- Node.js (v16 or later) 
- MongoDB (set up database locally or use cloud services)
- Postman or cURL for API testing

### **Setup Instructions**

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Prasad052003/VRV-Security-s-Backend-Developer-Intern-Assignment.git
   cd VRV-Security-s-Backend-Developer-Intern-Assignment
   ```

2. Configure environment variables:
    - Create a .env file with the following keys
      
   ```bash
   MONGO_URI=YOUR_MONGO_DATABASE_URL
   JWT_SECRET = YOUR_SECRET_PASSWORD
   PORT = PORT_NUMBER
   ```
   
3. Install Dependencies
   
   ```bash
   npm install
   ```

4. Start the server
   
     ```bash
     npm start
     ```
# API Documentation

## **Authentication APIs**

#### **1. Register User**
- **Endpoint**: `POST /api/auth/register`
- **Description**: Registers a new user with a username, password, and role.
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "password123",
    "role": "User"
  }
  ```

### **2. Login User**
- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticates a user and returns a JWT.
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  
## **Role-Based Access Control (RBAC) APIs**

### **1. Admin Route**
- **Endpoint**: `GET /api/roles/admin`
- **Description**: Accessible only to users with the `Admin` role.
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`

### **2. Moderator Route**
- **Endpoint**: `GET /api/roles/moderator`
- **Description**: Accessible to users with `Admin` or `Moderator` roles.
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`

### **3. User Route**
- **Endpoint**: `GET /api/roles/user`
- **Description**: Accessible to all logged-in users (`Admin`, `Moderator`, or `User` roles).
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`

### **4. Token Validation API**
- **Endpoint**: `POST /api/auth/validate`
- **Description**: Verifies the JWT and returns user details.
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`



# Project Directory Structure
``` bash
project-name/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/
│   └── authController.js    # Authentication logic
│   └── roleController.js    # Role-based access logic
├── middleware/
│   └── authMiddleware.js    # JWT verification
│   └── roleMiddleware.js    # Role-based authorization
├── models/
│   └── User.js              # User schema
├── routes/
│   └── auth.js              # Authentication routes
│   └── roles.js             # RBAC routes
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Dependencies
├── README.md                # Project documentation
└── server.js                # Entry point
```


