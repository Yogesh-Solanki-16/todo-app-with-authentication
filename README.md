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

## 🔌 API Integration

### API Architecture

The application uses a modular API architecture with:
- **Centralized Axios instance** with interceptors
- **Environment-based configuration**
- **Automatic token management**
- **Global error handling**
- **Reusable API functions**

### Environment Variables

```env
VITE_API_BASE_URL=https://dummyjson.com
```

### API Structure

```
src/api/
├── axios.js          # Configured Axios instance
├── authApi.js        # Authentication endpoints
├── productApi.js     # Product CRUD endpoints
├── index.js          # Central exports
└── README.md         # Detailed API documentation
```

### Request Interceptor

Automatically adds authentication token to all requests:

```javascript
// Automatically added to headers
Authorization: Bearer <token>
```

### Response Interceptor

Handles common scenarios:
- **401**: Clears token and redirects to login
- **403**: Permission denied
- **404**: Resource not found
- **500**: Server error
- **Network errors**: Connection issues

### Authentication Endpoint
```javascript
POST https://dummyjson.com/auth/login
Content-Type: application/json

{
  "username": "emilys",
  "password": "emilyspass"
}
```

**Response:**
```json
{
  "id": 1,
  "username": "emilys",
  "email": "emily.johnson@x.dummyjson.com",
  "firstName": "Emily",
  "lastName": "Johnson",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Product Endpoints

#### Get All Products
```javascript
import { getProducts } from '@/api';

const data = await getProducts({ limit: 10, skip: 0 });
```

#### Add Product
```javascript
import { addProduct } from '@/api';

const newProduct = await addProduct({
  title: "Product Name",
  brand: "Brand Name",
  category: "Category",
  price: 99.99,
  stock: 50,
  description: "Product description"
});
```

#### Update Product
```javascript
import { updateProduct } from '@/api';

const updated = await updateProduct(1, {
  title: "Updated Product Name"
});
```

#### Delete Product
```javascript
import { deleteProduct } from '@/api';

await deleteProduct(1);
```

For detailed API documentation, see [src/api/README.md](src/api/README.md)

---

## 🗄️ Redux State Management

### Store Structure
```javascript
{
  auth: {
    user: Object | null,
    token: String | null,
    loading: Boolean,
    error: String | null
  },
  products: {
    items: Array,
    loading: Boolean,
    error: String | null
  }
}
```

### Auth Slice Actions
- `loginUser(credentials)` - Async thunk for user login
- `logout()` - Clear user session

### Product Slice Actions
- `fetchProducts()` - Fetch all products
- `addProduct(product)` - Add new product
- `updateProduct({ id, ...data })` - Update existing product
- `deleteProduct(id)` - Delete product

### Example Usage
```javascript
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct } from './store/slices/productSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  // Component logic...
}
```

---

## 📸 Screenshots

### Login Page
Beautiful gradient background with form validation and error handling.

### Product Management Dashboard
- Navigation bar with user info and logout
- Total product count display
- Search functionality
- Responsive product table
- Action buttons for edit/delete

### Add/Edit Product Modal
Clean modal interface with form validation for product management.

---

## 🎓 Assignment Requirements

This project fulfills all assignment requirements:

### ✅ Step 1: React App Setup
- Modern React 19 application
- Professional project structure
- Industry-standard best practices
- Vite build tool for optimal performance

### ✅ Step 2: Redux Integration
- Redux Toolkit for state management
- Structured state management system
- Async thunks for API operations
- Middleware for asynchronous operations

### ✅ Step 3: User Authentication
- Login page with DummyJSON API integration
- JWT token storage in localStorage
- Comprehensive error handling
- User feedback for authentication states
- Registration page interface

### ✅ Step 4: Product List Table
- Fetches data from DummyJSON API
- Data managed through Redux store
- Responsive table design
- Search and filter functionality

### ✅ Step 5: CRUD Operations
- **Create**: Add new products via modal
- **Read**: Display products in table format
- **Update**: Edit existing products
- **Delete**: Remove products with confirmation
- Total records display

### ✅ BONUS: Professional API Architecture
- **Centralized Axios instance** with interceptors
- **Environment variables** for configuration
- **Automatic token management** via request interceptor
- **Global error handling** via response interceptor
- **Modular API functions** for maintainability
- **Comprehensive documentation**
- **Type-safe API calls** with JSDoc comments
- **Clean separation of concerns**

---

## 🔒 Security Features

- JWT token-based authentication
- Protected routes with authentication guards
- Secure token storage in localStorage
- Automatic token validation
- Session management

---

## 🎨 Styling

### Tailwind CSS v4
This project uses the latest Tailwind CSS v4 with:
- Utility-first approach
- Custom theme configuration
- Responsive design utilities
- Modern gradient backgrounds
- Smooth transitions and animations

### Color Scheme
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Success: Green
- Danger: Red
- Neutral: Gray scale

---

## 🐛 Troubleshooting

### CSS Not Loading
If Tailwind CSS styles aren't appearing:

1. **Restart the dev server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Clear browser cache**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

3. **Verify index.css import** in `src/main.jsx`:
   ```javascript
   import './index.css'
   ```

### API Errors
If you encounter API errors:
- Check your internet connection
- Verify the DummyJSON API is accessible
- Check browser console for detailed error messages

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email: your.email@example.com

---

<div align="center">
  <p>Made with ❤️ using React, Redux, and Tailwind CSS</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
