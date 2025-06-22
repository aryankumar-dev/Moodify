import { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')



        try {
            const data = await apiClient.login( email, password);
            console.log(data);
            if (data.success) {
                navigate("/home");
            } else {

                setError(data.message || "Login failed");
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="login">
            <h1>Welcome to Login page</h1>
            <div></div>
            {true && <div> {error}</div>}
            <form onSubmit={handleSubmit}>

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


                <button type='submit' disabled={loading}> {loading ? 'login...' : 'Signup'}</button>

            </form>
        </div>

    )
}

export default Login;