import React, { useState } from 'react';
import { Card, Form, Col, Button, Row, Container } from 'react-bootstrap';
import toast,{Toaster} from "react-hot-toast";
import img09 from "../../assets/all-images/cars-img/Car Back.jpg";
import "../../styles/Login.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {

    e.preventDefault();
    let values = { "email": email, "password": password }
    // let values = JSON.stringify(data)
    console.log(values)

    const validate = () => {

      let temp = {};
      console.log(/\S+@\S+\.\S+/.test(values.email));
      temp.email = /\S+@\S+\.\S+/.test(values.email)

        ? ''

        : 'Email is not valid.';

      temp.password = values.password !== '' ? '' : 'This field is required.';

      console.log(temp);

      return Object.values(temp).every((x) => x === '');

    };

    if (validate()) {
      axios
      .post('https://localhost:7131/api/Auths/login', values)
      .then((res) => {
        console.log(res.data)
        const { token, roleId, userName,email,userId } = res.data;


        localStorage.setItem('token', token);

        //localStorage.setItem('expirationMinutes', expirationMinutes);

        localStorage.setItem('roleId', roleId);

        localStorage.setItem('userName', userName);

        localStorage.setItem('email', email);

        localStorage.setItem('userId', userId);



        alert("login successfull!");

        // Redirect based on role ID

        if (roleId === 1) {

          navigate('/admin/home');

        } else if (roleId === 2) {

          navigate('/user/userHome');

        } else {

          // Handle unknown role ID

          navigate('/login'); // Redirect to login page

        }

      })


        .catch((err) => 

        {
          alert("This didn't work.")
          console.log('Login failed', err)
        // toast.error("Login Failed");
       
    });

    }

  };

  //   console.log(email);
  //   try{
  //     const response = await fetch('https://localhost:7131/api/Auths/login',{
  //       method: 'POST',
  //       header:{
  //         'Content-Type':'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });
  //     if(!response.ok){
  //       throw new Error('Login Failed');
  //     }
  //     const data = await response.json();
  //     const token = data.token;

  //     localStorage.setItem('authToken',token);
  //   }catch(error){
  //     console.error(error);
  //   }
  // };



  return (
    <div>
      <Toaster />
      <Container fluid className="p-5">
        <Card>
          <Row>
            <Col md='6'>
              <img src={img09} alt="login form" className='rounded-start w-100' />
            </Col>

            <Col>
              <Card.Body>
                <div>
                  <Card.Title>Login Page</Card.Title>

                </div>
                <h5 className="fw-normal my-4 pb-3 " style={{ letterSpacing: '1px' }}>Sign into your account</h5>


                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                      onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Remember me"
                  />


                </Form>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-1" style={{ color: '#393f81' }}>Don't have an account? <a href="/register" style={{ color: '#393f81' }}>Register here</a></p>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={handleLogin}>
                    Login Now
                  </Button>
                  <div className="center-link">
                    <p>
                      <Link to="/">Go to Home</Link>
                    </p>
                  </div>
                </div>
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>








              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>

    </div>
  );
}
