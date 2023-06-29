import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Card, Form, Col, Row, Container, InputGroup, FormGroup, Label, Button } from 'react-bootstrap';
import Helmet from '../Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import "../../styles/booking.css";
import Navbar from "./NavbarUser";
import Footer from "./Footer";
import CarDetailsuser from "./CarDetailsuser";
import axios from "axios";




const Booking = () => {




    const location = useLocation();
    let { pricePerDay, carItem } = location.state;
    pricePerDay = pricePerDay.pricePerDay;



    const [startDate, setStartDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [taxAndCharges, setTaxAndCharges] = useState(150);
    const [totalPrice, setTotalPrice] = useState(0);



    useEffect(() => {
        if (startDate && returnDate) {
            const start = new Date(startDate);
            const end = new Date(returnDate);
            const timeDiff = Math.abs(end.getTime() - start.getTime());
            const rentalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            const rentalPrice = pricePerDay * rentalDays;
            const totalPrice = rentalPrice + taxAndCharges;

            setSubtotal(rentalPrice);
            setTotalPrice(totalPrice);
        }
    }, [startDate, returnDate, pricePerDay, taxAndCharges]);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleReturnDateChange = (e) => {
        setReturnDate(e.target.value);
    };

    const handleBooking = async () => {
        const bookingDto = {
            "bookingId": 0,
            "carId": carItem.carId,
            "totalPrice": totalPrice,
            "startDate": startDate,
            "returnDate": returnDate,
            "userId": localStorage.getItem('userId')
        }
        console.log(bookingDto)

        try {
            axios.post("https://localhost:7131/api/Booking", bookingDto).then(response => {
                if (response.status === 200) {
                    alert("Booking Confirmed!!!!");
                    document.getElementById("returnDate").value = '';
                    document.getElementById("startDate").value = '';
                    setSubtotal(0);
                    setTotalPrice(0);


                }
            });

        } catch (err) {
            console.log(err);
        }


    }

    return (
        <div>
            <Navbar />
            <Helmet title='Booking'>

                <CommonSection title='Booking' />

                <CarDetailsuser />
                <section>
                    <Container>
                        <card>
                            <Row><Col lg='8'>
                                <Card.Body className='text-black d-flex flex-column justify-content-center'>
                                    <h6 className="mb-4 fw-bold">Billing Information</h6>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="userName" value={localStorage.getItem('userName')} />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={localStorage.getItem('email')} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>User Id</Form.Label>
                                        <Form.Control type="text" value={localStorage.getItem('userId')} />

                                    </Form.Group>




                                    <Form.Group className="mb-3">

                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control id="startDate" type="date" placeholder="StartDate" onChange={(e) => setStartDate(e.target.value)} />
                                        {/* </InputGroup> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3">

                                        <Form.Label>Return Date</Form.Label>
                                        <Form.Control id="returnDate" type="date" placeholder="ReturnDate" onChange={(e) => setReturnDate(e.target.value)} />
                                    </Form.Group>

                                </Card.Body>
                            </Col>
                                <Col lg='4' className="summary">
                                    <div className="checkout__car p-2" style={{ backgroundColor: "darkblue", padding: "10px" }}>
                                        <h6 className="mb-4 fw-bold">Summary</h6>
                                        <h6>SubTotal: <span>Rs. {subtotal.toFixed(2)}</span></h6>
                                        <h6>Tax and Charges: <span>Rs. {taxAndCharges.toFixed(2)}</span></h6>
                                        <h4>Total Price: <span>Rs. {totalPrice.toFixed(2)}</span></h4>

                                        <Button className="btn mb-2 w-100" size="lg" onClick={handleBooking}>Book Here</Button>
                                    </div>
                                </Col>
                            </Row>
                        </card>
                    </Container>
                </section>
            </Helmet >
            <Footer />

        </div>

    );
};



export default Booking;