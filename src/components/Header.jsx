import styled from "styled-components";
import FormInput from "./FormInput";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>IP Address Tracker</h1>
      <FormInput />
    </HeaderContainer>
  );
};

export default Header;

// Styled Components

const HeaderContainer = styled.div`
  height: 250px;
  background: url("/images/pattern-bg.png") no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
  }
`;
