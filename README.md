# 🚀 Using APIs LikePro

Welcome to **Using APIs LikePro**! This project demonstrates advanced techniques for working with APIs in React, focusing on fetching and displaying product data. It includes best practices for handling API requests, managing state, and ensuring smooth dynamic rendering of data.

---

## 📦 Features

- **Dynamic Product Search**: Search for products in real-time using a search input.
- **Custom Hook for API Requests**: `useCustomQuery` hook that abstracts API calls and manages loading, error, and data states.
- **Error Handling**: Graceful handling of errors during data fetching.
- **Efficient State Management**: Using React hooks to manage state and re-fetching of data when necessary.
- **CORS Fixing**: Handled CORS policies to make the API work across different environments.

---

## 🌍 Demo

[Click here to see the live demo](#)

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios
- **Backend**: Express (For CORS handling)
- **API**: Fetching product data from an API

---

## 💻 Getting Started

To get this project up and running on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/using-apis-likepro.git
```

### 2. Install dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd using-apis-likepro
npm install
```

### 3. Run the project

To start the frontend project (React app), run:

```bash
npm start
```

For the backend API, ensure that your Express server is running.

---

## 🔧 Features Walkthrough

### `useCustomQuery` Hook

A custom hook that encapsulates the logic for making API calls, including error handling, data fetching, and loading states.

```javascript
const fetchProducts = (signal) => getProductBySearch(search || "", signal);
const {
  data: products,
  error,
  loading,
} = useCustomQuery(fetchProducts, [search]);
```

- **Signal**: Used to cancel the fetch request if necessary (e.g., on unmount).
- **Search**: Dynamically fetches products based on the search query.

### `getProductBySearch` API Request

A helper function that fetches data from the backend API.

```javascript
export const getProductBySearch = (productName) =>
  api.get(`/products?search=${productName}`, {
    signal: controller.signal,
  });
```

This function uses the search query to fetch product data from the API and handles the cancellation signal.

---

## ⚙️ API Setup (Backend)

If you want to run the backend API locally, make sure you have the following:

1. **Express**: For handling API requests.
2. **CORS Middleware**: To allow cross-origin requests.

Example CORS configuration:

```javascript
const cors = require("cors");
app.use(cors());
```

Make sure the server is running on the appropriate port (e.g., `http://localhost:3000`).

---

## 🧑‍🤝‍🧑 Contributing

We welcome contributions to make this project better! If you have suggestions or improvements, feel free to fork the repo, make your changes, and create a pull request.

---

## 📚 License

This project is open-source and available under the [MIT License](LICENSE).
