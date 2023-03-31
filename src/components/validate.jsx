const Validate = (data, type) => {

    if (type === 'sign-up') {
        const errors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            isAccepted: '',
        };

        // NAME VALIDATION
        if (!data.name.trim()) {
            errors.name = 'username required!';
        } else {
            errors.name = '';
        }

        // EMAIL VALIDATION
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!data.email.trim()) {
            errors.email = 'email required!';
        } else if (!emailRegex.test(data.email.toLowerCase())) {
            errors.email = 'enter valid email!';
        } else {
            errors.email = '';
        }

        // PASSWORD VALIDATION
        if (!data.password) {
            errors.password = 'password required!'
        } else if (data.password.length < 6) {
            errors.password = 'password should be more than 6 character!';
        } else {
            errors.password = '';
        }

        // CONFIRM PASSWORD VALIDATION
        if (!data.confirmPassword) {
            errors.confirmPassword = 'confirm the password!'
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'password doesnt match!';
        } else {
            errors.confirmPassword = '';
        }

        // ISACCEPTED VALIDATION
        if (!data.isAccepted) {
            errors.isAccepted = 'you should accept terms policy!'
        } else {
            errors.isAccepted = '';
        }


        return errors;
    } else if (type === 'login') {
        const errors = {
            email: '',
            password: '',
        };

        // EMAIL VALIDATION
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!data.email.trim()) {
            errors.email = 'email required!';
        } else if (!emailRegex.test(data.email.toLowerCase())) {
            errors.email = 'enter valid email!';
        } else {
            errors.email = '';
        }

        // PASSWORD VALIDATION
        if (!data.password) {
            errors.password = 'password required!'
        } else if (data.password.length < 6) {
            errors.password = 'password should be more than 6 character!';
        } else {
            errors.password = '';
        }

        return errors;
    }

}

export default Validate;