import {emailRegex, pwdRegex} from "../Regex";
import {PWD_HELP_TEXT, C_PWD_HELP_TEXT} from "../../../Constants";


export function emailValidator(value) {
    return {email: !(emailRegex.test(value)) ? 'Email is invalid' : ''}
}

export function passwordValidator(pwd, confirm){
    return {
        password: !(pwdRegex.test(pwd)) ? PWD_HELP_TEXT : '',
        confirm_password: pwd === confirm? "": C_PWD_HELP_TEXT,
    }
}
