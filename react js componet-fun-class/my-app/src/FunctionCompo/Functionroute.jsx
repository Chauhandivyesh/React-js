import React from "react";
import { Routes, Route } from "react-router-dom";
import Functioncompointro from "./Functioncompointro";
import Functioncompomenu from "./Functioncompomenu";
import Usestate from "./Usestate";
import Usercompoprops from "./Usercompoprops";
import Layouteffect from "./Layouteffect";
import Usememo from "./Usememo"
import Usecallback from "./Usecallback";
import Api from "./Api";
import Apiphoto from './Apiphoto';
import UseReducer from './UseReducer';
import Usenavigate from './Usenavigate';
import Usecontexthook from './Usecontexthook';
import Usecontext from './Usecontext';
import Functioncompoprops from "./Functioncompoprops";
import UseEffect from "./UseEffect";
import Apipost from "./Apipost";
import Crud from './Crud';
import MainTable from './todo/maintodo'




const Functionroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Functioncompomenu />}>
                <Route path="Functioncompointro" element={<Functioncompointro />} />
                <Route path="Usestate" element={<Usestate />} />
                <Route path="Usercompoprops" element={<Usercompoprops />} />
                <Route path="Layouteffect" element={<Layouteffect />} />
                <Route path="Usememo" element={<Usememo />} />
                <Route path="Usecallback" element={<Usecallback />} />
                <Route path="Api" element={<Api />} />
                <Route path="Apiphoto" element={<Apiphoto />} />
                <Route path='Usecontext' element={<Usecontext />} />
                <Route path='Usecontexthook' element={<Usecontexthook />} />
                <Route path='UseReducer' element={<UseReducer />} />
                <Route path='Usenavigate' element={<Usenavigate />} />
                <Route path='Functioncomprops' element={<Functioncompoprops />} />
                <Route path='UseEffect' element={<UseEffect />} />
                <Route path='Apipost' element={<Apipost />} />
                <Route path='Crud' element={<Crud/>}/>
                <Route path='MainTable' element={<MainTable/>}/>
                {/* <Route path='Form' element={<Form/>}/> */}


            </Route>
        </Routes>

    )
}
export default Functionroutes