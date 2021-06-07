export default function validateInfo(valuesss) {

    let errors = {};
    //console.log(errors);
    //username
    if (!valuesss.username) {
        errors.username = "Username Required"
    }

    //email
    if (!valuesss.email) {
        errors.email = "Email Requirded"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valuesss.email)){
        errors.email = 'Email is invalid'
    }

    //password
    if (!valuesss.password) {
        errors.password = 'Password Required'
    } else if(valuesss.password.length < 6) {
        errors.password = 'Password more than 6carac'
    }

    //password2
    if (!valuesss.password2) {
        errors.password2 = 'Password Required'
    } else if(valuesss.password2 !== valuesss.password){
        errors.password2 = 'Password does not match'
    }

    return errors;

}