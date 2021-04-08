import { createContext, useState } from "react";

export const IpContext = createContext();

export const IpProvider = (props) => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState({
    ip: "8.8.4.4",
    city: "Mountain View",
    region: "California",
    postal: "94035",
    org: "Google",
    timezone: "America/Los_Angeles",
    latitude: "37.751 ",
    longitude: "-97.822",
  });

  return (
    <IpContext.Provider
      value={{
        ipInfo: [ipAddress, setIpAddress],
        ipDataInfo: [ipData, setIpData],
      }}
    >
      {props.children}
    </IpContext.Provider>
  );
};
