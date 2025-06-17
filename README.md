# Auth0 Authorization System – Next.js & NextAuth.js

This project implements an OAuth-based authentication and role-based authorization system using Auth0 and NextAuth.js. It restricts route access via JWT session validation and Next.js middleware. The architecture follows SOLID principles and adheres to 12 Factor App standards.

## 🔧 Technologies Used

- **Next.js 14+ (App Router)**
- **NextAuth.js**
- **Auth0 (OAuth Provider)**
- **JWT (JSON Web Token)**
- **TypeScript**
- **TailwindCSS** (for login UI)
- **Docker**
- **.env configuration**
- **Git / GitHub Workflow (dev/v1.0.0 → prod/v1.0.0)**

## 🚀 Features

- **OAuth Integration:** Sign in via Auth0 (e.g., Google).
- **Role-Based Access Control:**
  - Three roles: `admin`, `editor`, `user`
  - New users are automatically assigned the `user` role via backend
- **Protected Routes:** Pages are secured via Next.js middleware based on role
- **Session Management:** JWT-based sessions with NextAuth.js
- **Docker Support:** Project is container-ready for local or production environments

## 🔐 Route Access by Role

| Role   | Accessible Routes                  |
|--------|------------------------------------|
| admin  | `/admin`, `/editor`, `/user`       |
| editor | `/editor`, `/user`                 |
| user   | `/user`                            |

## 👤 Demo Accounts

You can test the system using the following demo users:

| Role   | Email               | Password     |
|--------|---------------------|--------------|
| admin  | `admin@gmail.com`   | `denemeA11+` |
| editor | `editor@gmail.com`  | `denemeA11+` |
| user   | `user@gmail.com`    | `denemeA11+` |

## ⚙️ Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Create and configure .env.local
cp .env.example .env.local

# 3. Run development server
npm run dev
