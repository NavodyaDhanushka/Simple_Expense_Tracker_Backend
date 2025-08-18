
# Expense Tracker

The Simple Expense Tracker is a full-stack web application built with the MERN stack. It allows users to manage their daily expenses by adding, viewing, updating, and deleting records through a clean and responsive user interface. The frontend, developed with React, provides a modern and user-friendly design, while the backend, powered by Node.js and Express, handles the CRUD operations efficiently. All expense data is stored in MongoDB, ensuring secure and scalable data management. This project demonstrates practical implementation of full-stack development with a focus on usability and seamless interaction.



## Features

✅ Add Expense – Record expense details (category, amount, description).

📖 View Expenses – List all expenses in a structured format.

🔍 Search Expenses – Quickly find expenses by category, date, or description.

✏️ Edit Expense – Update any expense details.

🗑️ Delete Expense – Remove unwanted expense records.

## Tech Stack

⚙ MongoDB – Database for storing expenses.

⚙ Express.js – Backend framework for API handling.

⚙ React.js – Frontend with a responsive and interactive UI.

⚙ Node.js – Server-side runtime environment.

## API Reference

#### Get all Expenses

```http
  GET /api/expenses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `None` | No parameters required. |

#### Create Expense

```http
  POST /api/expenses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Expense title or name. |
| `amount`      | `number` | **Required**. Expense amount. |
| `category`      | `string` | **Required**. Expense category (e.g., Food, Travel). |
| `description`      | `string` | **Optional**. Additional details about the expense.|
| `date`      | `string` | **Optional**. Date of expense (default: current date). |



#### Update Expense

```http
  PUT /api/expenses/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Unique expense ID. |
| `title`      | `string` | **Optional**. Updated expense title. |
| `amount`      | `number` | **Optional**. Updated expense amount. |
| `category`      | `string` | **Optional**. Updated category. |
| `description`      | `string` | **Optional**. Updated description.|
| `date`      | `string` | **Optional**. Updated date. |


#### Delete Expense

```http
  DELETE /api/expenses/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. Unique expense ID. |

## Installation & Setup

#### Clone the Project

```bash
  git clone https://github.com/NavodyaDhanushka/Simple_Expense_Tracker_Backend.git
  cd expense-tracker
```

#### Install Dependencies

```bash
  cd server
  npm install
```

#### Setup MongoDB Connection

Create a free MongoDB cluster on MongoDB Atlas OR install MongoDB locally.

Copy your MongoDB connection string. It will look like:

```bash
  mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense_tracker
```

Inside the server folder, create a .env file and add:
```bash
  MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense_tracker
  PORT=5000
```

#### Run the Backend (Server)
```bash
  cd server
  npm start
```
Runs Express server on http://localhost:5000.

Connects to MongoDB automatically if MONGO_URI is correct.

#### Test the API Endpoints

Open http://localhost:5000 in your Postman.

Add, view, edit, delete, and search expenses.

Verify data is stored in MongoDB.
