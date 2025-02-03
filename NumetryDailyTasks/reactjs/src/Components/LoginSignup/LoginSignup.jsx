import React,{ useState} from 'react'
import '../Css/LoginSignup.css'

const LoginSignup =() =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return( 
     
 


        // -----
    <div className="login-container">
    <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="input-container">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
</div>


    )
}

export default LoginSignup;