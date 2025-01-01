import express from "express"
import cors from "cors"
const app = express();
const products = [
    {
        id: 1,
        name: "Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 59.99,
        category: "Electronics",
        stock: 150,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1612478120679-5b7412e15f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Smartphone",
        description: "Latest model with high-resolution display and advanced features.",
        price: 699.99,
        category: "Mobile",
        stock: 75,
        rating: 4.7,
        image: "https://www.shutterstock.com/shutterstock/photos/2498571845/display_1500/stock-photo-smartphone-with-futuristic-neon-light-circle-on-dark-background-2498571845.jpg",
    },
    {
        id: 3,
        name: "Running Shoes",
        description: "Comfortable and durable shoes for all your running needs.",
        price: 89.99,
        category: "Footwear",
        stock: 200,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Laptop Backpack",
        description: "Stylish and spacious backpack with a laptop compartment.",
        price: 49.99,
        category: "Accessories",
        stock: 120,
        rating: 4.4,
        image: "https://plus.unsplash.com/premium_photo-1677504191937-84cbe6b0c8f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "LED Desk Lamp",
        description: "Energy-efficient desk lamp with adjustable brightness.",
        price: 29.99,
        category: "Home & Office",
        stock: 80,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]


app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173' // Allow only requests from this origin (your frontend)
}));

app.get('/api/products', (req, res) => {
    let newFilteredProducts = products; // Default to all products

    if (req.query.search) {
        newFilteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase()));

        res.send(newFilteredProducts);
        return;
    }

    
        res.send(newFilteredProducts);
        return// Send the filtered products
    
});


app.listen(3000, () => {
    console.log("server is running at port 30000");
})