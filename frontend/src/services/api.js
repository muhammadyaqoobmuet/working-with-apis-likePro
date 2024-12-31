// src/services/api.js
import axios from "axios";

const controller = new AbortController();

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    
});

// Expose the abort controller
export const getController = () => controller;
