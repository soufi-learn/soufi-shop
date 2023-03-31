import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "../components/toast";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/form.css';
import Validate from "../components/validate";

const Register = () => {
    // STATES
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // DISTRUCTURING DATA VALUES
    const { name, email, password, confirmPassword, isAccepted } = data;

    // GET ERROR VALUES FROM EXTERNAL COMPONENT

    useEffect(() => {
        setErrors(Validate(data, 'sign-up'));
    }, [data, touched]);

    // CHANGE HANDLER FOR ALL INPUTS AND CHECKBOX
    const changeHandler = (e) => {
        if (e.target.name === 'isAccepted') {
            setData({ ...data, [e.target.name]: e.target.checked })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
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
                    name: true,
                    email: true,
                    password: true,
                    confirmPassword: true,
                    isAccepted: true,
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
        <div className="container mb-8 mt-14">
            <ToastContainer position="top-left"
                theme="dark" />

            <div className="sign-up-container">
                <form onSubmit={submithandler}>
                    <h2 className="mb-4 text-center form-title">Sign Up</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="mb-1">Name:</label>
                        <input type="text" value={name} className={`form-control form-input ${(touched.name && errors.name) && 'input-error'}`} id="name" name="name" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.name && errors.name}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="mb-1">Email:</label>
                        <input type="email" value={email} className={`form-control form-input ${(touched.email && errors.email) && 'input-error'}`} id="email" name="email" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.email && errors.email}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input type="password" value={password} className={`form-control form-input ${(touched.password && errors.password) && 'input-error'}`} id="password" name="password" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.password && errors.password}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="mb-1">Confirm Password:</label>
                        <input type="password" value={confirmPassword} className={`form-control form-input ${(touched.confirmPassword && errors.confirmPassword) && 'input-error'}`} id="confirmPassword" name="confirmPassword" autoComplete="off" onChange={changeHandler} onFocus={focusHandler} />
                        <span className="text-center text-danger badge form-error-text">{touched.confirmPassword && errors.confirmPassword}</span>
                    </div>
                    <div className="flex flex-wrap justify-center mt-6">
                        <label htmlFor="isAccepted" className="text-primary">I Accept Terms Of Policy</label>
                        <input type="checkbox" checked={isAccepted} className={`ms-2 ml-2 ${(touched.isAccepted && errors.isAccepted) && 'input-error'}`} id="isAccepted" name="isAccepted" onChange={changeHandler} onClick={focusHandler} />
                        <span className="w-full text-danger badge form-error-text">{touched.isAccepted && errors.isAccepted}</span>
                    </div>

                    <div className="form-buttons-wrapper">
                        <button type="submit" className="w-full my-3 mt-4 d-block form-submit-btn bg-gradient-to-b from-blue-400 to-blue-600 hover:bg-gradient-to-t">Submit</button>
                        <Link to='/login' className="btn text-secondary">Have An Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;