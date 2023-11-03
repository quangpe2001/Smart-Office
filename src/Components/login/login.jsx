import React from 'react';
import './login.css';

const login = () => {
    return (
        <body>
        <div class="container">
            <div>
                <h4>Login</h4>
            </div>
            <div class="fold">
                <form>
                    <input  id="icons" type="text" name="" placeholder="Username"/>
                    <input type="password" name="" placeholder="Password"/>
                    <br></br><br></br>
                    <input type="submit" name="" value="Login"/>
                    
                    <br></br>
                    <p>Don't have an account? Register</p>
                </form>
            </div>
        </div>
    </body>
    )}
export default login