import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

function getAccessTokenFromStorage() {
    const raw = localStorage.getItem("token");
    if (!raw) return null;

    // Token may be stored either as raw JWT string or JSON.
    let value;
    try {
        value = JSON.parse(raw);
    } catch {
        value = raw;
    }

    if (typeof value === "string") return value.replace(/^"|"$/g, "");
    if (value && typeof value === "object") {
        return (
            value.access_token ||
            value.access ||
            value.token ||
            null
        );
    }

    return null;
}

api.interceptors.request.use((config) => {
    const accessToken = getAccessTokenFromStorage();
    if (accessToken) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export default api;