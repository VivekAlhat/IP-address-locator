import styled from "styled-components";
import { useContext } from "react";
import { IpContext } from "../context/context";

const InfoModal = () => {
  const value = useContext(IpContext);
  const [data, setData] = value.ipDataInfo;
  const { ip, city, region, postal, org, timezone } = data;

  return (
    <InfoContainer>
      <IpInfo>
        <p>Ip Address</p>
        <h2>{ip}</h2>
      </IpInfo>
      <Divider></Divider>
      <LocInfo>
        <p>Location</p>
        <h2>{city + "," + region + "," + postal}</h2>
      </LocInfo>
      <Divider></Divider>
      <TimeZoneInfo>
        <p>Timezone</p>
        <h2>{timezone}</h2>
      </TimeZoneInfo>
      <Divider></Divider>
      <ISPInfo>
        <p>ISP</p>
        <h2>{org}</h2>
      </ISPInfo>
    </InfoContainer>
  );
};

export default InfoModal;

// Styled Components

const InfoContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 170px;
  left: 250px;
  padding: 1rem 2rem;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 18px;
  }
`;

const IpInfo = styled.div``;

const LocInfo = styled.div``;

const TimeZoneInfo = styled.div``;

const ISPInfo = styled.div``;

const Divider = styled.div`
  padding: 0 1rem;
`;
