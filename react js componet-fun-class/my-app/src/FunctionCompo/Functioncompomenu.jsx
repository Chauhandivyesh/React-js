import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functioncompomenu =()=>{
    return(
        <>
        <div className="row">
            <div className="col-6 offset-6">
        <ul>
            <li><Link to="Functioncompointro">Function compo intro</Link></li>
            <li><Link to="Usestate">Usestate</Link></li>
            <li><Link to="Usercompoprops">usercompoprops</Link></li>
            <li><Link to="Layouteffect">Layout effect</Link></li>
            <li><Link to="Usememo">Use memo</Link></li>
            <li><Link to="Usecallback">Use callback</Link></li>
            <li><Link to="Api">Api</Link></li>
            <li><Link to="Apiphoto">Apiphoto</Link></li>
            <li><Link to="UseReducer">UseReducer</Link></li>
            <li><Link to="Usecontext">Usecontext</Link></li>
            <li><Link to="Usecontexthook">Usecontexthook</Link></li>
            <li><Link to="Usenavigate">Usenavigate</Link></li>
            <li><Link to="Functioncomprops">Functioncomprops</Link></li>
            <li><Link to="UseEffect">UseEffect</Link></li>
            <li><Link to="Apipost">Apipost</Link></li>
            <li><Link to="Crud">Crud</Link></li>
            <li><Link to="MainTable">MainTable</Link></li>
            {/* <li><Link to="Form">Form</Link></li> */}



        </ul>
        <Outlet></Outlet>
        </div>
        </div>
        </>
    )
}
export default Functioncompomenu