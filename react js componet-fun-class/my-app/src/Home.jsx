import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

// import TableData from './Form'; 
  

const Home = () => {
    return (
        <>
        <Navbar/>
        <h1>home </h1>
        {/* <TableData />  */}

            <Outlet/>
        </>
    );
};

export default Home;
