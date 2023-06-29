import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = ({isLoggedIn,isAdmin,userName}) => {
  return (
    <Fragment>
      
      <div>
        <Routers />
      </div>
     
    </Fragment>
  );
};

export default Layout;
