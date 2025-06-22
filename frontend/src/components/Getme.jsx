import { useState, useEffect } from "react";
import apiClient from "../../service/apiClient";

function GetMe() {
  // 1) State for the user’s profile fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");    // normally you wouldn’t render password back, but included per your state!
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 2) Fetch profile once on mount
  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setError("");
      try {
        const data = await apiClient.getProfile();  // assuming getProfile() does GET /auth/me
        // populate your states
        setFullName(data.fullName || "");
        setEmail(data.email || "");
        setPassword(data.password || "");
        setUsername(data.username || "");
      } catch (err) {
        setError(err.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  // 3) Render
  return (
    <div className="getme">
      <h2>My Profile</h2>

      {loading && <p>Loading…</p>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <ul>
          <li>
            <strong>Full Name:</strong> {fullName}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Username:</strong> {username}
          </li>
          <li>
            <strong>Password:</strong> {password}
          </li>
        </ul>
      )}
    </div>
  );
}

export default GetMe;
