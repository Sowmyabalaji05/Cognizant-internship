import React,{useEffect,useState} from "react";
import { Container, Row, Col,Table } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CustomerCommonSection from "../UI/CustomerCommonSection";
import CarItem from "../UI/CarItem";
import carData from "../../assets/data/carData"
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminCarItem from "../UI/AdminCarItem";
import axios from "axios";

const CustomerList = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");




  useEffect(() => {

    // Make the HTTP GET request to fetch the user data

    // Replace `/api/users` with the actual backend API endpoint to retrieve the user data

    axios

      .get("https://localhost:7131/api/User",{
        headers:{
          Authorization: `Bearer ${token}`,
            },
      })

      .then((response) => {

        // Update the state variable with the fetched user data

        setUsers(response.data);
        console.log(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);
  return (
    <div>
    <Navbar />
    <Helmet title="CustomerList">
      <CustomerCommonSection title="Customer List" />

      <section>
        <Container>
        <br/>
        <br/>
        <br/>
        <table class="table table-striped">

  <thead>

    <tr>

      {/* <th scope="col">#</th> */}

      <th scope="col">UserId</th>

      <th scope="col">UserName</th>

      <th scope="col">Email</th>

      <th scope="col">Gender</th>

       <th scope="col">PhoneNumber</th>

       <th scope="col">Address</th>

    </tr>

  </thead>

  <tbody>

   

  {users.map((user) => (

<tr key={user.userId}>

<td>{user.userId}</td>

<td>{user.userName}</td>

<td>{user.email}</td>

<td>{user.gender}</td>

<td>{user.phoneNumber}</td>

<td>{user.address}</td>

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

export default CustomerList;
