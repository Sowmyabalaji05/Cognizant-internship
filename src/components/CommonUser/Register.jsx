import React from 'react';
import { Container, Button, Col, Row, Card, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import car from "../../assets/all-images/cars-img/car2.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import toast,{Toaster} from "react-hot-toast";



import "../../styles/Register.css";

export default function Register() {

  const[userName,setUserName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const[gender,setGender]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[address,setAddress]=useState('');

  const handleRegister =async(e) =>{
    e.preventDefault();

    try{
      const response = await axios.post('https://localhost:7131/api/Auths/Registration',{
        userName,
        email,
        password,
        confirmPassword,
        gender,
        phoneNumber,
        address,
        roleId:2
      });
      console.log(response.data);

      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setGender('');
      setPhoneNumber('');
      setAddress('');

      alert("Registered successfully!");

      window.location.href = '/login'
    }
    catch(error){
      alert("Registration not successfully!");
      console.error(error);
    }
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Header />
      <Toaster/>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="reg">
          <Container fluid className="p-5">
            <Card>
              <Row>
                <Col md='6'>
                  <img src={car} alt="Registration Form" className='rounded-start w-100' />
                </Col>

                <Col>
                  <Card.Body className='text-black d-flex flex-column justify-content-center'>

                    <h2 className="mb-5 text-center text-uppercase fw-bold">SignUp / Registration Form</h2>
                    <Form.Group className="mb-3" controlId="formGroupUserName">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control type="userName" placeholder="Enter UserName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email ID" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                      <Form.Label>ConfirmPassword</Form.Label>
                      <Form.Control type="confirmPassword" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </Form.Group>
                    <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                      <Form.Label>Gender:</Form.Label>
                      <div className="mb-3">
                      
                          <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type="radio"
                            id="inline-radio-1"
                            value="Male"
                            checked={gender=="Male"}
                            onChange={(e) =>
                            setGender(e.target.value)}
                            required
                          />
                          <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type="radio"
                            id="inline-radio-2"
                            value="Female"
                            checked={gender=="Female"}
                            onChange={(e) =>
                            setGender(e.target.value)}
                            required
                          />
                          <Form.Check
                            inline
                            label="Others"
                            name="group1"
                            type="radio"
                            id="inline-radio-3"
                            value="Others"
                            checked={gender=="Others"}
                            onChange={(e) =>
                            setGender(e.target.value)}
                            required
                          />
                        
                      </div>
                    </div>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>+91</InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>

                    <div className="flex-container">

                      <Button variant="primary" size="lg" onClick={handleRegister}>
                        SignUp
                      </Button>{' '}

                      <Button href="/login" size="lg">Login Here</Button>

                    </div>

                  </Card.Body>
                </Col>
              </Row>
            </Card>


          </Container>
        </div>


      </Form>
      <Footer />

    </div>


  );
}
