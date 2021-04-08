import React from "react";
import Header from "./components/Header";
import Leaflet from "./components/Leaflet";
import InfoModal from "./components/InfoModal";
import { IpProvider } from "./context/context";

function App() {
  return (
    <IpProvider>
      <div className="App">
        <Header />
        <InfoModal />
        <Leaflet />
      </div>
    </IpProvider>
  );
}

export default App;
