import React, { useState } from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import '../Login/Login.css';
import '/src/assets/styles/bootstrap.min.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value)
        }else{
            setPassword(value)
        }
    }
    function handleSubmit(){
        let account = {user, password}
        if(account){
            console.log('account:', account)
        }
    }

    return(
        <div className="wrapper d-flex align-items-center justify-content-center w-100" >
            <form className="shadow p-3 mb-5 bg-body-tertiary rounded w-25 p-3">
                <center>
                    <h1>¡Bienvenido!</h1>
                </center>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico o usuario:</label>
                    <input type="text" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control" name='usuario' id="usuario" required></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
                    <input type="password" onChange={(e) => handleChange(e.target.name, e.target.value)} className="form-control" id="contrasenia" required></input>
                </div>
                <div className="form-group mb-2">
                    <a href="#" className="link-secondary">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={handleSubmit} className="btn btn-success">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    )
};

export default Login;