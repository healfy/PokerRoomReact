import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {FormField} from "../../Components/FormField"
import {useState} from "react";
import {connect} from "react-redux";
import { mapStateToProps} from "../../Store/auth/mappers";
import { useNavigate } from "react-router-dom";


function Sign({_, client}) {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''})
    const onSubmit = async (event) => {
        event.preventDefault()
        if (await client.login(form)) {
            navigate("/tables")
        }
    }

    const onChange = ({target: {value, id}}) => {
        setForm(prevState => ({...prevState, [id]: value}))
    }

    return (
        <div className="container ">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
                <Link to="/register">
                    Need an account?
                </Link>
            </p>
            <Form onSubmit={onSubmit}>
                <FormField value={form.email} name="email" type="email" label="Email address"
                           placeholder="name@example.com" onChange={onChange}/>
                <FormField value={form.password} name="password" type="password" label="password"
                           placeholder="password123" onChange={onChange}/>
                <Button variant="primary" size="lg" active className="mt-lg-4" onClick={onSubmit}>
                    Sign in
                </Button>
            </Form>
        </div>
    );
}

export default connect(mapStateToProps)(Sign)
