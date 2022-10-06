import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { FormField } from "../../Components/FormField";
import {useState} from "react";
import {RegisterFormValidator} from "../../Components/Validators";
import {connect} from "react-redux";
import { mapStateToProps} from "../../Store/auth/mappers";


function Register({_, client}) {
    const fields = {email: "", password: "", confirm_password: ""}
    const [form, setForm] = useState(fields)
    const [errors, setErrors] = useState(fields)

    const onSubmit = async (event) => {
        event.preventDefault()
        const [isValid, errors] = RegisterFormValidator(form)
        if (!isValid) {
            setErrors(prevState => ({...prevState, ...errors}))
        } else {
            setErrors(fields)
            await client.register(form)
        }
    }

    const onChange = ({target: {value, id}}) => {
        setForm(prevState => ({...prevState, [id]: value}))
    }

    return (
        <div className="container ">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
                <Link to="/sign">
                    Already have an account?
                </Link>
            </p>
            <Form onSubmit={onSubmit}>
                <FormField value={form.email} name="email" type="email" label="Email address"
                           placeholder="name@example.com" onChange={onChange} errorMessage={errors.email}/>
                <FormField value={form.password} name="password" type="password" label="password"
                           placeholder="password123" onChange={onChange} errorMessage={errors.password}/>
                <FormField onChange={onChange}
                           name={"confirm_password"}
                           type={"password"}
                           label={"Confirm Password"}
                           placeholder={"password123"}
                           value={form.confirm_password}
                           errorMessage={errors.confirm_password}
                />
                <Button variant="primary" size="lg" active type="submit" className="mt-lg-4">
                    Sign up
                </Button>
            </Form>
        </div>
    );
}

export default connect(mapStateToProps)(Register)
