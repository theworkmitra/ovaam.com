const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginUser(email, password) {
    const response = await fetch(`${API_URL}/api/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Login failed");
    }

    return result;
}

export async function getProfile(token) {
    const response = await fetch(`${API_URL}/api/me.php`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Authentication failed");
    }

    return result;
}

export async function logoutUser(token) {
    const response = await fetch(`${API_URL}/api/logout.php`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.json();
}
