import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState({ name: "", email: "", type: "" });
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const authValue = { authUser, setAuthUser, userLoggedIn, setUserLoggedIn };

    const setUser = (data) => {
        setUserLoggedIn(true);
        setAuthUser({ name: data.name, email: data.email, type: data.type });
    };

    const token = localStorage.getItem("jwt_token");

    async function callProtectedEndpoint() {
        const url = "http://localhost:5000/protected"; // Replace with your API endpoint

        if (!token) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(url, {
                method: "POST", // Adjust the method as needed (GET, PUT, etc.)
                headers: {
                    "alg": "HS256",
                    "typ": "JWT",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            if (result?.data) {
                const { name = "Guest", email = "unknown", type = "unknown" } = result.data;
                setUser({ name, email, type });
            } else {
                throw new Error("Invalid response structure");
            }
        } catch (error) {
            console.error("Error calling protected endpoint:", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        callProtectedEndpoint();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
