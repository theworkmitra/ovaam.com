import { useEffect, useState } from "react";
import { loginUser, getProfile, logoutUser } from "./services/api";
import AdminPanel from "./admin/AdminPanel";
import HomePage from "./home/HomePage";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(() => sessionStorage.getItem("ovaam_token"));
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [checkingSession, setCheckingSession] = useState(
        () => Boolean(sessionStorage.getItem("ovaam_token"))
    );
    const [error, setError] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        if (!token) {
            setCheckingSession(false);
            return;
        }

        getProfile(token)
            .then(setProfile)
            .catch(() => {
                sessionStorage.removeItem("ovaam_token");
                setToken(null);
                setProfile(null);
            })
            .finally(() => setCheckingSession(false));
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await loginUser(email, password);
            sessionStorage.setItem("ovaam_token", result.token);
            setToken(result.token);
            setProfile(await getProfile(result.token));
            setPassword("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logoutUser(token);
        } catch {
            // Clear the local session even if the request fails.
        }

        sessionStorage.removeItem("ovaam_token");
        setToken(null);
        setProfile(null);
        setEmail("");
        setPassword("");
        setShowLogin(false);
    };

    if (checkingSession) {
        return <div className="ovaam-session-loading">Loading OVAAM...</div>;
    }

    if (profile?.user?.role === "admin") {
        return <AdminPanel token={token} onLogout={handleLogout} />;
    }

    if (!profile && !showLogin) {
        return <HomePage onLogin={() => setShowLogin(true)} />;
    }

    const inputStyle = {
        width: "100%",
        padding: "13px",
        marginTop: "8px",
        marginBottom: "18px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxSizing: "border-box",
        fontSize: "15px",
    };

    const buttonStyle = {
        width: "100%",
        padding: "14px",
        background: "#171717",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#f5f6fa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
        }}>
            <div style={{
                background: "white",
                width: "100%",
                maxWidth: "500px",
                padding: "35px",
                borderRadius: "16px",
                boxShadow: "0 8px 35px rgba(0,0,0,.07)",
            }}>
                <h1 style={{ textAlign: "center" }}>OVAAM</h1>

                {!profile ? (
                    <>
                        <p style={{ textAlign: "center", color: "#777", marginBottom: "22px" }}>
                            Login to your OVAAM account
                        </p>

                        <form onSubmit={handleLogin}>
                            <label>Email Address</label>
                            <input
                                style={inputStyle}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />

                            <label>Password</label>
                            <input
                                style={inputStyle}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />

                            {error && <p style={{ color: "red", marginBottom: "14px" }}>{error}</p>}

                            <button style={buttonStyle} disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        <button
                            type="button"
                            onClick={() => { setShowLogin(false); setError(""); }}
                            style={{ ...buttonStyle, marginTop: "10px", background: "#fff", color: "#14213a", border: "1px solid #d5d9e0" }}
                        >
                            Back to Home
                        </button>
                    </>
                ) : (
                    <>
                        <div style={{
                            background: "#e8f5e9",
                            padding: "18px",
                            borderRadius: "10px",
                            marginTop: "25px",
                        }}>
                            <h2>Welcome, {profile.user.name}!</h2>
                            <p>{profile.user.email}</p>
                            <strong>Login successful</strong>
                        </div>

                        <h3 style={{ marginTop: "22px" }}>Your Stores</h3>
                        {profile.stores.length === 0 ? (
                            <p>No stores found.</p>
                        ) : (
                            profile.stores.map((store) => (
                                <div key={store.id} style={{
                                    padding: "15px",
                                    border: "1px solid #ddd",
                                    borderRadius: "9px",
                                    marginBottom: "12px",
                                }}>
                                    <strong>{store.store_name}</strong>
                                    <p>{store.subdomain}.ovaam.com</p>
                                    <small>Status: {store.status}</small>
                                </div>
                            ))
                        )}

                        <button onClick={handleLogout} style={{ ...buttonStyle, marginTop: "20px" }}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
