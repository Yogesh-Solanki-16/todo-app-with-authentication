# 🛍️ Product Management System

A modern, full-featured React application with Redux state management, JWT authentication, and complete CRUD operations for product management. Built with React 19, Redux Toolkit, and Tailwind CSS v4.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=flat&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Redux State Management](#-redux-state-management)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication

- **Login System** - Secure JWT-based authentication
- **Registration Page** - User-friendly registration interface
- **Token Management** - Automatic token storage in localStorage
- **Protected Routes** - Route guards for authenticated access
- **Error Handling** - Comprehensive error messages and validation

### 📦 Product Management

- **Product List Table** - Responsive, sortable product display
- **Search Functionality** - Real-time product search
- **CRUD Operations**:
  - ✅ **Create** - Add new products with detailed information
  - 📖 **Read** - View all products in a structured table
  - ✏️ **Update** - Edit existing product details
  - 🗑️ **Delete** - Remove products with confirmation
- **Total Records Display** - Real-time product count
- **Modal Interface** - Clean, intuitive add/edit modal

### 🎨 UI/UX

- **Modern Design** - Beautiful gradient backgrounds
- **Responsive Layout** - Mobile-first, works on all devices
- **Tailwind CSS v4** - Latest utility-first CSS framework
- **Smooth Animations** - Enhanced user experience
- **Loading States** - Visual feedback for async operations

---

## 🎯 Demo

### Demo Credentials

Use these credentials to test the application:

```
Username: emilys
Password: emilyspass
```

### Quick Start

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5173` and login with the demo credentials.

---

## 🛠️ Tech Stack

### Frontend

- **React 19.2.4** - Latest React with modern features
- **Redux Toolkit 2.11.2** - State management with best practices
- **React Router DOM 7.14.0** - Client-side routing
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Build Tools

- **Vite 8.0** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency

### HTTP Client

- **Axios 1.14.0** - Promise-based HTTP client

### API

- **DummyJSON API** - Mock REST API for testing
  - Authentication: `https://dummyjson.com/auth`
  - Products: `https://dummyjson.com/products`

---

## 📁 Project Structure

```
react-todo-app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── api/                      # API layer (NEW!)
│   │   ├── axios.js              # Axios instance with interceptors
│   │   ├── authApi.js            # Authentication API functions
│   │   ├── productApi.js         # Product API functions
│   │   ├── index.js              # Central API exports
│   │   └── README.md             # API documentation
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── ProductModal.jsx      # Modal for add/edit product
│   │   └── ProtectedRoute.jsx    # Route protection HOC
│   ├── pages/
│   │   ├── Login.jsx             # Login page with authentication
│   │   ├── Register.jsx          # User registration page
│   │   └── Products.jsx          # Product list and management
│   ├── store/
│   │   ├── store.js              # Redux store configuration
│   │   └── slices/
│   │       ├── authSlice.js      # Authentication state & actions
│   │       └── productSlice.js   # Product state & CRUD actions
│   ├── App.css                   # Global styles
│   ├── App.jsx                   # Main app component with routing
│   ├── index.css                 # Tailwind CSS imports
│   └── main.jsx                  # App entry point with providers
├── .env                          # Environment variables (NEW!)
├── .env.example                  # Environment variables template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd react-todo-app
```

### Step 2: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and configure your API base URL (default is already set)
# VITE_API_BASE_URL=https://dummyjson.com
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

---

## 💻 Usage

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) - Free fake REST API
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) - Official Redux toolset
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

<div align="center">
  <p>Made with ❤️ using React, Redux, and Tailwind CSS</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
