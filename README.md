# Time Tracking Trial (T3)

A simplified **Insightful-like** time tracking solution built for Mercor’s work trial.  

This project includes:
- **Backend (Node.js + Express + MySQL)** — REST API for employees, projects, and time tracking  
- **Web app** — employee onboarding & app download  
- **Electron desktop app** — for clock-in/clock-out and time tracking  

---

## Features
- Employee management (add, list, login, deactivate)
- Project management (create, assign employees)
- Time logging (start/stop shifts)
- Placeholder for screenshot capture & background data
- Electron desktop app for employees to log time
- Minimal web app for onboarding employees
- API-first architecture for easy integration

---

## Tech Stack
- **Backend:** Node.js, Express, Sequelize ORM, MySQL  
- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Desktop App:** Electron  
- **API Testing:** Postman  

---

## System Architecture

```text
+------------------+        +-----------------+        +------------------+
|  Web App (HTML)  | <----> |   Express API   | <----> |  MySQL Database  |
+------------------+        +-----------------+        +------------------+
         ^
         |
         v
+------------------+
| Electron Desktop |
|  (Clock-in/out)  |
+------------------+
```

Flow:
  - Employees are added via API → Get onboarding email → Activate via Web App
  - Employees download & login via Electron App → Clock in/out, time logs captured
  - API stores employees, projects, and time logs in MySQL

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
```
## System Design & Trade-offs

- **Backend-first**: Built API-first to allow web & desktop apps to share the same endpoints.  
- **MySQL with Sequelize**: Relational DB allows easy reporting & ensures data integrity.  
- **Electron for Desktop App**: Cross-platform support (can extend later for Windows, macOS, Linux).  
- **Security**: Placeholder for future JWT authentication & role-based access control.  
- **Screenshots & Permissions**: Deferred for minimal viable product; can be integrated later using native Electron APIs.  

## Next Steps

- Implement **screenshot capture** in the Electron app.  
- Add **IP & MAC tracking** for fraud prevention.  
- Improve **UI design** for web and desktop apps.  
- Add **JWT authentication** for enhanced security.  
- Build **admin panel** for HR/project managers.  
