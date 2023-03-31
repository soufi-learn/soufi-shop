import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notify } from "../components/toast";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/form.css';
import Validate from "../components/validate";

const Login = () => {
    // STATES
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // DISTRUCTURING DATA VALUES
    const { email, password } = data;

    // GET ERROR VALUES FROM EXTERNAL COMPONENT

    useEffect(() => {
        setErrors(Validate(data, 'login'));
    }, [data, touched]);

    // CHANGE HANDLER FOR ALL INPUTS AND CHECKBOX
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // SHOW ERROR TEXT WHEN FOCUS ON INPUTS
    const focusHandler = (e) => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    // SUBMITATION FORM
    const submithandler = (e) => {
        let error;
        Object.keys(errors).forEach((key) => {
            const value = errors[key];
            if (value !== '') {
                e.preventDefault();
                setTouched({
                    email: true,
                    password: true,
                });
                error = true;
            } else {
                error = false;
            }
        });

        // SHOW TOAST TEXT IN EVERY CONDITION AFTER SUBMIT
        if (error) {
            notify('Fill Inputs!', 'error');
        } else {
            notify('All Done :)', 'success');
        }
    }

    return (
        <div className="container form-container">
            <ToastContainer position="top-left"
                theme="dark" />
            <div className="sign-up-container">
                <form onSubmit={submithandler}>
                    <h2 className="mb-4 text-center form-title">Login</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="mb-1">Email:</label>
                        <input type="email" value={email} className={`form-input ${(touched.email && errors.email) && 'input-error'}`} id="email" name="email" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.email && errors.email}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input type="password" value={password} className={`form-input ${(touched.password && errors.password) && 'input-error'}`} id="password" name="password" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.password && errors.password}</span>
                    </div>
                    <div className="form-buttons-wrapper">
                        <button type="submit" className="w-full my-3 mt-4 d-block form-submit-btn bg-gradient-to-b from-blue-400 to-blue-600 hover:bg-gradient-to-t">Login</button>
                        <Link to='/register' className="btn text-secondary">Create Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;