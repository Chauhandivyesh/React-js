import React, {Component} from "react";
import { Route,Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classcompodemo from "./Classcompodemo";
import Classcompoprops from "./Classcompoprops";
import Maincard from './Maincard';
import Classcompostate from "./Classcompostate";
import Classcomporendering from "./Classcomporendering";
import Uncontrolledcomponents from "./Uncontrolledcomponents";
import Controlledcomponents from "./Controlledcomponents";
import Listandkeys from "./Listandkeys";
import Classcompositionandinheritance from "./Classcompositionandinheritance";
import Maincounter from "./HOC/Maincounter";

class Classroutes extends Component {
    render() {   
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu/>}>
                <Route path="Classcompointro" element={<Classcompointro/>} />    
                <Route path="Classcompodemo" element={<Classcompodemo/>} />    
                <Route path="Classcompoprops" element={<Classcompoprops/>}/>
                <Route path="Maincard" element={<Maincard/>}/>
                <Route path="Classcompostate" element={<Classcompostate/>}/>
                <Route path="Classcomporendering" element={<Classcomporendering/>}/>
                <Route path="Uncontrolledcomponents" element={<Uncontrolledcomponents/>} />
               <Route path="Controlledcomponents" element={<Controlledcomponents/>} />
               <Route path="Listandkeys" element={<Listandkeys/>} />
               <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance/>} />
               {/* <Route path="Clickcounter" element={<Clickcounter/>} /> */}
               <Route path="Maincounter" element={<Maincounter/>} />
               {/* <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance/>} /> */}

                </Route>
            </Routes>
        );
    }
} 

 export default Classroutes;