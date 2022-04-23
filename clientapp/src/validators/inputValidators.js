export const validateFullName = (fullName) => {
    if(!fullName) {
        return {
            valid: false,
            message: 'Full name is required!'
        };
    }

    return {
        valid: true
    };
}

export const validateEmail = (email) => {
    if(email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)){
        return {
            valid: true
        };
    }
    else {
        if(!email) {
            return {
                valid: false,
                message: 'Email is required!'
            };
        }
        else {
            return {
                valid: false,
                message: 'Please insert valid email.'
            };
        }
    }
}

export const validatePassword = (password) => {
    if(!password){
        return {
            valid: false,
            message: 'Password is required!'
        };
    }

    if(password.length < 6) {
        return {
            valid: false,
            message: 'Password must contain at least 8 characters'
        };
    }

    const badFormatResult = {
        valid: false,
        message: 'Password must contain at least one lowercase letter, one uppercase letter and one number.'
    };

    const lowerCaseLetters = /[a-z]/g;
    if(!password.match(lowerCaseLetters)){
        return badFormatResult;
    }

    const upperCaseLetters = /[A-Z]/g;
    if(!password.match(upperCaseLetters)){
        return badFormatResult;
    }

    const numbers = /[0-9]/g;
    if(!password.match(numbers)){
        return badFormatResult;
    }

    return {
        valid: true
    };
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        return {
            valid: false,
            message: 'Passwords did not match.'
        };
    }

    return {
        valid: true
    };
}