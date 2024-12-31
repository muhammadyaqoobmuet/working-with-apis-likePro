// src/services/productService.js
import { api, getController } from "./api";

const controller = getController();

export const getAllProducts = () => api.get("/products");

export const getProductBySearch = (productName) =>
    api.get(`/products?search=${productName}`, {
        signal: controller.signal,
    });
