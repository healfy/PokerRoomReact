import Form from "react-bootstrap/Form";

export const FormField = ({label, type, placeholder, name, errorMessage, onChange}) => {
    return (
        <Form.Group className="col-md-6 offset-md-3 col-xs-12">
            <Form.Label>{label}</Form.Label>
            <Form.Control onChange={onChange} id={name} type={type} placeholder={placeholder} size="lg" aria-describedby={name}/>
            <Form.Text id={name} muted>
                {errorMessage}
            </Form.Text>
        </Form.Group>
    )
}