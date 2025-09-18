# ScholarMatch Backend

## Description

This is the backend for the ScholarMatch application, built with NestJS. It provides API endpoints for user authentication and management.

## Technologies Used

- NestJS
- TypeScript
- Mongoose (for MongoDB interaction)
- JWT (JSON Web Tokens) for authentication
- Bcrypt for password hashing

## Getting Started

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd scholarmatch-backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/scholarmatch
JWT_SECRET=your_jwt_secret_key
```

Replace `your_jwt_secret_key` with a strong, unique secret.

### Running the Application

```bash
npm run start:dev
```

The application will run on the port specified in your `.env` file (defaulting to 3000).

## API Endpoints

### Authentication Module

#### `POST /auth/signup`

Registers a new user and returns an access token.

- **Request Body (`CreateUserDto`)**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "gender": "string",
    "interests": ["string", "string"],
    "confirmPassword": "string"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "string"
  }
  ```

#### `POST /auth/signin`

Authenticates an existing user and returns an access token.

- **Request Body (`SignInDto`)**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "string"
  }
  ```

### User Module

#### `POST /user`

Creates a new user (typically used internally or by administrators, without authentication concerns like password hashing or token generation).

- **Request Body (`CreateUserDto`)**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "gender": "string",
    "interests": ["string", "string"],
    "confirmPassword": "string"
  }
  ```
- **Response (`User` object)**:
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "__v": 0
  }
  ```

#### `GET /user`

Retrieves a list of all users. Requires authentication.

- **Headers**:
  ```
  Authorization: Bearer <access_token>
  ```
- **Response (Array of `User` objects)**:
  ```json
  [
    {
      "_id": "string",
      "username": "string",
      "email": "string",
      "password": "string",
      "__v": 0
    }
  ]
  ```

#### `GET /user/:id`

Retrieves a single user by ID. Requires authentication.

- **Parameters**:
  - `id`: The ID of the user to retrieve.
- **Headers**:
  ```
  Authorization: Bearer <access_token>
  ```
- **Response (`User` object)**:
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "__v": 0
  }
  ```

#### `PATCH /user/:id`

Updates a user's information by ID. Requires authentication.

- **Parameters**:
  - `id`: The ID of the user to update.
- **Headers**:
  ```
  Authorization: Bearer <access_token>
  ```
- **Request Body (`UpdateUserDto`)**:
  ```json
  {
    "username"?: "string",
    "email"?: "string",
    "password"?: "string"
  }
  ```
- **Response (`User` object)**:
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "__v": 0
  }
  ```

#### `DELETE /user/:id`

Deletes a user by ID. Requires authentication.

- **Parameters**:
  - `id`: The ID of the user to delete.
- **Headers**:
  ```
  Authorization: Bearer <access_token>
  ```
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```
  (Note: The actual response from `remove` in `UserService` is the deleted document, but a success message is a common API practice.)

## API Flows

### User Registration and Authentication Flow

1.  **User Registration**:
    - A new user sends a `POST` request to `/auth/signup` with their `username`, `email`, and `password`.
    - The `AuthService` hashes the password and then calls `UserService` to create the user record in the database.
    - Upon successful creation, `AuthService` generates a JWT `access_token` and returns it to the user.

2.  **User Login**:
    - An existing user sends a `POST` request to `/auth/signin` with their `email` and `password`.
    - The `AuthService` verifies the credentials by comparing the provided password with the hashed password stored in the database.
    - If credentials are valid, `AuthService` generates a new JWT `access_token` and returns it to the user.

3.  **Accessing Protected Resources**:
    - To access any protected endpoint (e.g., `/user`, `/user/:id`), the user must include the `access_token` obtained during signup or signin in the `Authorization` header of their request, prefixed with `Bearer `.
    - Example: `Authorization: Bearer <your_access_token>`
    - The backend will validate this token to ensure the user is authenticated and authorized to access the resource.
