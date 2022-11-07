import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import './App.scss';
import LocationPage from "./pages/LocationPage/LocationPage";
import {useState} from "react";

function App() {

    const [coordinates, setCoordinates] = useState({lon:null, lat:null})

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LocationPage setCoordinates={setCoordinates}/>}/>
        <Route path={'/weather'} element={<HomePage coordinates={coordinates}/>}/>
      </Routes>
    </div>
  );
}

export default App;
