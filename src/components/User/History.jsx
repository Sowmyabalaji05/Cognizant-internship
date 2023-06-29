import React from "react";
import Navbar from "./NavbarUser";
import Footer from "./Footer";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";

const History = () =>{
    return(
        <div>
            <Navbar />
            <Helmet title="History">
            <CommonSection title='Booking History' />
            <section>


            </section>

            </Helmet>
            <Footer />

        
        </div>

    );
};
export default History;