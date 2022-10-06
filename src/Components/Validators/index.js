import {emailValidator, passwordValidator} from "./Fields";


export function RegisterFormValidator (form) {
    const errors =  {...passwordValidator(form.password, form.confirm_password), ...emailValidator(form.email)}
    return [Object.values(errors).every(x => x === null || x === ''), errors]
}
