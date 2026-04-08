# React Product Management App

A complete React application with Redux state management, authentication, and CRUD operations for product management.

## Features

- **User Authentication**: Login and Register pages with JWT token storage
- **Redux State Management**: Centralized state management using Redux Toolkit
- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Product List Table**: Display products in a responsive table with search functionality
- **Protected Routes**: Secure routes that require authentication
- **Tailwind CSS**: Modern, responsive UI design
- **API Integration**: Uses DummyJSON API for authentication and products

## Technologies Used

- React 19
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- Vite

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Demo Credentials

Use these credentials to login:
- **Username**: emilys
- **Password**: emilyspass

## Project Structure

```
src/
├── components/
│   ├── ProductModal.jsx      # Modal for add/edit product
│   └── ProtectedRoute.jsx    # Route protection component
├── pages/
│   ├── Login.jsx             # Login page
│   ├── Register.jsx          # Registration page
│   └── Products.jsx          # Product list and management
├── store/
│   ├── store.js              # Redux store configuration
│   └── slices/
│       ├── authSlice.js      # Authentication state
│       └── productSlice.js   # Product state and CRUD operations
├── App.jsx                   # Main app component with routing
└── main.jsx                  # App entry point with Redux Provider
```

## Features Implemented

### Step 1: React App Setup ✓
- Modern React application with Vite
- Professional project structure
- Industry-standard best practices

### Step 2: Redux Integration ✓
- Redux Toolkit for state management
- Async thunks for API calls
- Middleware for asynchronous operations

### Step 3: User Authentication ✓
- Login page with DummyJSON API integration
- JWT token storage in localStorage
- Error handling with user feedback
- Register page UI

### Step 4: Product List Table ✓
- Fetches products from DummyJSON API
- Data managed through Redux
- Responsive table design
- Search functionality

### Step 5: CRUD Operations ✓
- Create: Add new products
- Read: Display product list
- Update: Edit existing products
- Delete: Remove products
- Total records display

## API Endpoints Used

- **Authentication**: `https://dummyjson.com/auth/login`
- **Products**: `https://dummyjson.com/products`
- **Add Product**: `https://dummyjson.com/products/add`
- **Update Product**: `https://dummyjson.com/products/{id}`
- **Delete Product**: `https://dummyjson.com/products/{id}`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
