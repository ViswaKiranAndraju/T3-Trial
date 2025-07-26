Here you go — **copy‑paste ready README.md**:

```markdown
# Time Tracking Trial (T3)

A simplified **Insightful-like** time tracking solution built for Mercor’s work trial.

This project includes:
- **Backend (Node.js + Express + MySQL)**
- **Web app** for employee onboarding & app download
- **Electron desktop app** for clock-in/clock-out & time tracking

---

## Features
- Employee management (add, list, login)
- Project management (basic API endpoints)
- Time logging (start/stop shifts)
- Placeholder for screenshot capture & background data
- Electron desktop app for employees to log time
- Minimal web app for onboarding employees

---

## Tech Stack
- **Backend:** Node.js, Express, Sequelize ORM, MySQL  
- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Desktop App:** Electron  
- **API Testing:** Postman  

---

## Project Structure
```

T3-Project/
│
├── backend/
│   ├── server.js            # Express server
│   ├── db.js                # Sequelize DB connection
│   ├── models/              # Sequelize models
│   │   ├── Employee.js
│   │   ├── Project.js
│   │   └── TimeLog.js
│   └── routes/              # API routes
│       ├── employeeRoutes.js
│       ├── projectRoutes.js
│       └── timeRoutes.js
│
├── web/                     # Basic web app
│   ├── index.html           # Employee onboarding
│   ├── style.css
│   └── script.js
│
├── desktop/                 # Electron app
│   ├── main.js              # Electron main process
│   ├── index.html           # Login screen
│   ├── dashboard.html       # Clock-in/Clock-out UI
│   ├── renderer.js
│   └── rendererDashboard.js
│
└── README.md

````

---

## Setup Instructions

### 1. Backend
#### Install dependencies
```bash
cd backend
npm install
````

#### Set up database

Create a MySQL database:

```sql
CREATE DATABASE time_tracking;
```

Create a `.env` file in `backend/`:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=time_tracking
PORT=3000
```

#### Run backend

```bash
node server.js
```

Server will run at `http://localhost:3000`.

---

### 2. Web App

Open `web/index.html` in your browser to onboard employees.

---

### 3. Desktop App

#### Install dependencies

```bash
cd desktop
npm install
```

#### Run Electron app

```bash
npm start
```

---

## API Testing with Postman

### Create Employee

```
POST http://localhost:3000/employees
Body (JSON):
{
   "name": "John Doe",
   "email": "john@example.com"
}
```

### Login Employee

```
POST http://localhost:3000/employees/login
Body (JSON):
{
   "email": "john@example.com"
}
```

### List Employees

```
GET http://localhost:3000/employees
```

---

## Next Steps

* Implement **screenshot capture** in the Electron app
* Add **IP & MAC tracking** for fraud prevention
* Improve **UI design** for web and desktop apps
* Add **JWT authentication** for security

---
