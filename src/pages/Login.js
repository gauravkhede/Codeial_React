import {  useParams , useNavigate} from "react-router-dom";
import {Formik, Form, Field,ErrorMessage} from 'formik';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import '../styles/Login.css';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';

import * as yup from 'yup';
import { Container } from "react-bootstrap";
const Login=()=>{
    var params=useParams();
    console.log(params,' is params');
    var {user}=params;
    var validationSchema = yup.object().shape({
        email: yup.string().required("Email is required").email("Enter valid Email"),
        password:yup.string().required("Password is required"),
        createdOn: yup.date().default(function () {
            return new Date();
                }),
            });
    const navigate=useNavigate();
    const handleSubmit=(values)=>{
            console.log(values);
            navigate('/');
        }
    return (
    <div className="body"> {user} LoggedIn 
    <div >
        <Container>
            <Row >
                <Col md={4} className="d-grid">
                <Card border="success" className="cardElement gap-3">
            <Card.Body >
                <Card.Title>Sign Up</Card.Title>
                    <Formik initialValues={{email:"",password:""}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>handleSubmit(values)}>
                        <Form >
                            <label id="email">Email: </label> <br />
                            <Field type="email" name="email" id="email"  placeholder="Enter an Email"></Field> <p id="email"><ErrorMessage name="email" /></p> <br />
                            <label id="password">Password: </label> <br />
                            <Field type="password" name="password" id="password" placeholder="Enter a password"></Field><p id="password"><ErrorMessage name="password"/></p><br />
                            <Button className="submitButton" variant="outline-danger"  type="submit" >SignUp</Button>
                        </Form>
                    </Formik>
                    <hr className="marginTop-1"></hr><Badge pill bg="secondary" className="orBadge">OR</Badge>
                    <div className="socialIconContainer marginLeft-35p marginBottom-2">
                        <div className="=googleIcon marginTop-1 marginLeft-point8"><img src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="googleIcon" className="height-5"/></div>
                        <div className="fbIcon marginTop-1 marginLeft-point8"><img alt="fbIcon" src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"  className="height-5"/></div>
                        <div className="linkedInIcon marginTop-1 marginLeft-point8"><img alt="linkedInIcon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"  className="height-5"></img></div>
                        </div>
                    <Card.Footer><p  className="LogInCardFooter">Already an Account? <Link to="/signup">LogIn </Link></p></Card.Footer>
            </Card.Body>
        </Card></Col>
        <Col md={4}>
                <Card border="success" className="cardElement">
            <Card.Body>
                <Card.Title>Log In</Card.Title>
                    <Formik initialValues={{email:"",password:""}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>handleSubmit(values)}>
                        <Form >
                            <label id="email">Email: </label> <br />
                            <Field type="email" name="email" id="email" placeholder="Enter an Email"></Field> <p id="email"><ErrorMessage name="email" /></p> <br />
                            <label id="password">Password: </label> <br />
                            <Field type="password" name="password" id="password" placeholder="Enter a password"></Field><p id="password"><ErrorMessage name="password"/></p><br />
                            <Button className="submitButton" variant="outline-danger" type="submit" >LogIn</Button>
                            <p className="forgetPasswordLink"><Link to="/" id="forgetPasswordUnvisited">Forget Password?</Link></p>
                        </Form>
                    </Formik>
                    <hr className="marginTop-1"></hr><Badge pill bg="secondary" className="orBadge">OR</Badge>
                    <div className="socialIconContainer marginLeft-35p marginBottom-2">
                        <div className="=googleIcon marginTop-1 marginLeft-point8"><img src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" alt="googleIcon" className="height-5"/></div>
                        <div className="fbIcon marginTop-1 marginLeft-point8"><img alt="fbIcon" src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"  className="height-5"/></div>
                        <div className="linkedInIcon marginTop-1 marginLeft-point8"><img alt="linkedInIcon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"  className="height-5"></img></div>
                        </div>
                    <Card.Footer><p  className="LogInCardFooter">Need an Account? <Link to="/signup">SignUp </Link></p></Card.Footer>
            </Card.Body>
        </Card></Col>

            </Row>
        </Container>
        
        
    </div>
    </div>
    );

}
export default Login;