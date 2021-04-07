import styled from "styled-components";

const InfoModal = () => {
  return (
    <InfoContainer>
      <IpInfo>
        <p>Ip Address</p>
        <h2>192.168.2.1</h2>
      </IpInfo>
      <Divider></Divider>
      <LocInfo>
        <p>Location</p>
        <h2>Brooklyn, New York, 10001</h2>
      </LocInfo>
      <Divider></Divider>
      <TimeZoneInfo>
        <p>Timezone</p>
        <h2>UTC-05:00</h2>
      </TimeZoneInfo>
      <Divider></Divider>
      <ISPInfo>
        <p>ISP</p>
        <h2>SpaceX Starlink</h2>
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
  left: 230px;
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
`;

const IpInfo = styled.div``;

const LocInfo = styled.div``;

const TimeZoneInfo = styled.div``;

const ISPInfo = styled.div``;

const Divider = styled.div`
  padding: 0 1rem;
`;
