import React from "react";
import Header from "./components/Header";
import Leaflet from "./components/Leaflet";
import InfoModal from "./components/InfoModal";
function App() {
  return (
    <div className="App">
      <Header />
      <InfoModal />
      <Leaflet />
    </div>
  );
}

export default App;
