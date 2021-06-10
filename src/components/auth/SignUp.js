import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const SignUp = (props) => {

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registarUsuario} = authContext;

    useEffect(()=>{
        if(autenticado){
            props.history.push('/main');
        }

        if(mensaje)
                showAlert(mensaje.msg,mensaje.category)

        // eslint-disable-next-line
    }, [mensaje, autenticado,props.history]);

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
        confirm:''
    });

    const {firstName, lastName, username, email, password, confirm} = user;
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const onsubmit=  e =>{
        e.preventDefault();

        // validate empty fields
        if(firstName.trim() === ''
        || lastName.trim() === ''
        || username.trim() === ''
        || email.trim() === ''
        || password.trim() === ''
        || confirm.trim()===''){

            showAlert('Todos los campos son obligatorios', 'alerta-error')
            return;

        }

        if(password.length < 6 ){
            showAlert('El password debe de ser de minimo 6 caracteres', 'alerta-error')
            return;
        }

        if(password !== confirm){
            showAlert('Los password no son iguales', 'alerta-error');
            return;
        }

        registarUsuario({firstName, lastName, username, password, email})

    }
    return (
       <div className="form-usuario">
           {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
           <div className="contenedor-form sombra-dark">
               <h1>Sign up</h1>
               <form
                onSubmit={onsubmit}
               >
                   <div className="campo-form">
                       <label htmlFor="firstName">First Name</label>
                       <input
                       type="text"
                       id="firstName"
                       name="firstName"
                       placeholder="Your First Name"
                       value={firstName}
                       onChange={onChange}
                       />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="lastName">Last Name</label>
                       <input
                       type="text"
                       id="lastName"
                       name="lastName"
                       placeholder="Your Last Name"
                       value={lastName}
                       onChange={onChange}
                       />
                   </div>

                   <div className="campo-form">
                       <label htmlFor="username">User Id</label>
                       <input
                       type="text"
                       id="username"
                       name="username"
                       placeholder="User Id"
                       value={username}
                       onChange={onChange}
                       />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="email">Email</label>
                       <input
                       type="email"
                       id="email"
                       name="email"
                       placeholder="Email"
                       value={email}
                       onChange={onChange}
                       />
                   </div>

                   <div className="campo-form">
                       <label htmlFor="password">password</label>
                       <input
                       type="password"
                       id="password"
                       name="password"
                       placeholder="Your Password"
                       value={password}
                       onChange={onChange}
                       />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="confirm">Confirm Password</label>
                       <input
                       type="password"
                       id="confirm"
                       name="confirm"
                       placeholder="Confirm Your Password"
                       value={confirm}
                       onChange={onChange}
                       />
                   </div>
                   <div className="campo-form">
                       <input
                       type="submit"
                       className="btn btn-primario btn-block"
                       value="Sign Up"
                       />

                   </div>
               </form>

               <Link to={'/'} className="enlace-cuenta">
                   Login
               </Link>
           </div>
       </div>
    );
};

export default SignUp;