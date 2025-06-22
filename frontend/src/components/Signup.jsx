import { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router-dom"; // ✅ Corrected

import "./Signup.css";

function Signup() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

    

        try {
            const data = await apiClient.signup(fullName, email, password, username);
            console.log(data);
            if (data.success) {
                navigate("/login");
            } else {
                
                setError(data.message || "Signup failed");
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="signup">
            <h1>Welcome to Signup page</h1>
            <div></div>
            {true && <div> {error}</div>}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="fullName">FullName:</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' disabled={loading}> {loading ? 'Signup...' : 'Signup'}</button>

            </form>
        </div>

    )
}

export default Signup;