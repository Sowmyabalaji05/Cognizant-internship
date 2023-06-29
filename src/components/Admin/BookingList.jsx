import React,{useState,useEffect} from "react";
import { Container, Row, Col,Table } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import BookingCommonSection from "../UI/BookingCommonSection";
import CarItem from "../UI/CarItem";
import carData from "../../assets/data/carData"
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminCarItem from "../UI/AdminCarItem";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");




  useEffect(() => {

    // Make the HTTP GET request to fetch the user data

    // Replace `/api/users` with the actual backend API endpoint to retrieve the user data

    axios

      .get("https://localhost:7131/api/Booking",{
        headers:{
          Authorization: `Bearer ${token}`,
            },
      })

      .then((response) => {

        // Update the state variable with the fetched user data

        setBookings(response.data);
        console.log(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);
  return (
    <div>
    <Navbar />
    <Helmet title="BookingList">
      <BookingCommonSection title="Booking List" />

      <section>
        <Container>
        <br/>
        <br/>
        <br/>
        <table class="table table-striped">

<thead>

  <tr>

    {/* <th scope="col">#</th> */}

    <th scope="col">BookingId</th>

    <th scope="col">UserId</th>

    <th scope="col">CarId</th>

    <th scope="col">StartDate</th>

     <th scope="col">ReturnDate</th>

     <th scope="col">TotalPrice</th>

  </tr>

</thead>

<tbody>

 

{bookings.map((booking) => (

<tr key={booking.bookingId}>

<td>{booking.bookingId}</td>

<td>{booking.userId}</td>

<td>{booking.carId}</td>

<td>{booking.startDate}</td>

<td>{booking.returnDate}</td>

<td>{booking.totalPrice}</td>



            {/* Render other user data fields as table cells */}

</tr>

        ))}

    </tbody>

</table>

<tbody>

</tbody>
        </Container>
      </section>
    </Helmet>
    <Footer />
    </div>
  );
};

export default BookingList;
