import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import Spinner from '../layout/Spinner';

const Login = (props) => {

    const [user, setUser] = useState({
        username:'',
        password:''
    });

    const {username, password} = user;

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {loading, mensaje,autenticado, iniciarSesion} = authContext;

    useEffect(()=>{
        if(autenticado){
            props.history.push('/main');
        }

        if(mensaje){
            showAlert(mensaje.msg, mensaje.categoria)
        }

        // eslint-disable-next-line
    }, [props, autenticado, mensaje]);

    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const onsubmit=  e =>{
        e.preventDefault();

        // validate empty fields
        if(username.trim() === ''|| password.trim() === ''){

            showAlert('Todos los campos son obligatorios', 'alerta-error')
            return;
        }

        if(password.length < 6 ){
            showAlert('El password debe de ser de minimo 6 caracteres', 'alerta-error')
            return;
        }

        iniciarSesion({username, password, email:username})

    }
    return (
       <div className="form-usuario">
           {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
           <div className="contenedor-form sombra-dark">
               <h1>Login</h1>
               {loading ? <Spinner/>: null}
               <form
                onSubmit={onsubmit}
               >
                   <div className="campo-form">
                       <label htmlFor="username">User</label>
                       <input
                       type="text"
                       id="username"
                       name="username"
                       placeholder="User Id or Email"
                       value={username}
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
                       <input
                       type="submit"
                       className="btn btn-primary btn-lg btn-block"
                       value="Login"
                       />

                   </div>
               </form>

               <Link to={'/SignUp'} className="enlace-cuenta">
                   Sign Up
               </Link>
           </div>
       </div>
    );
};

export default Login;