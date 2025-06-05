# Simple Task API

This is a basic Express.js API for managing a list of tasks.

## Features

- Create new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)

## Setup and Installation

1.  **Clone the repository (or download the `index.js` file).**
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/project
    ```
3.  **Install dependencies:**
    This project uses Express.js.
    ```bash
    npm install express
    ```
4.  **Run the server:**
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:3000`.

### Task Object Structure

```json
{
  "id": 1,
  "caption": "My first task",
  "completed": false
}
```

## Example Usage (using curl)

- **Get all tasks:**
  ```bash
  curl http://localhost:3000/api/tasks
  ```
- **Create a new task:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"caption":"Buy milk"}' http://localhost:3000/api/tasks
  ```
- **Mark task with ID 1 as completed:**
  ```bash
  curl -X PUT http://localhost:3000/api/tasks/1
  ```
- **Delete task with ID 1:**
  ```bash
  curl -X DELETE http://localhost:3000/api/tasks/1
  ```
