// src/hooks/useCustomQuery.js
import { useState, useEffect } from "react";
import axios from "axios";

export function useCustomQuery(fetchFunction, dependencies = []) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetchFunction(controller.signal);
                setData(response.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log("Request canceled", err.message);
                    return;
                }
                setError(err.message || "An unknown error occurred");
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, dependencies);

    return { data, error, loading };
}
