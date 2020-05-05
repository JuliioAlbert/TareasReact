import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State para iniciar Sesion
    const [usuario, gurdarUsuario]= useState({
        email:'',
        password: ''
    });

    //Extrar del usuario 
    const {email, password} = usuario;


    const onChange = e => {
        gurdarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando usuario da submit
    const onSubmit = e =>{
        e.preventDefault();


        //validar que no halla campos vacios 


        //Pasarlo al action


    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={() => onSubmit()}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;