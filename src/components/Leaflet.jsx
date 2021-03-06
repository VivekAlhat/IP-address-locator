import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext } from "react";
import { IpContext } from "../context/context";

const Leaflet = ({ ipInfo }) => {
  const value = useContext(IpContext);
  const [data, setData] = value.ipDataInfo;
  const { latitude, longitude } = data;
  
  const position = [latitude, longitude];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Leaflet;
