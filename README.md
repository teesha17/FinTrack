# Finance Dashboard Backend

A backend system for managing financial records with role-based access control and analytics.

---

## 🚀 Features

- User Authentication (JWT)
- Role-Based Access Control (Viewer, Analyst, Admin)
- Financial Record Management (CRUD)
- Dashboard Analytics (Income, Expense, Balance)
- Filtering & Query Support
- Input Validation

---

## 🧠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Zod Validation

---

## 📁 Project Structure

- Controllers → Business logic
- Routes → API endpoints
- Models → Database schemas
- Middleware → Auth & RBAC

---

## 🔐 Roles

| Role    | Permissions |
|--------|------------|
| Viewer | View data only |
| Analyst | View records + analytics |
| Admin | Full access |

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/finance-dashboard-backend.git
cd finance-dashboard-backend
npm install
cp .env.example .env
npm run dev
