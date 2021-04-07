import styled from "styled-components";

const FormInput = () => {
  return (
    <InputContainer>
      <Input placeholder="Search for any IP address or domain" />
      <Button></Button>
    </InputContainer>
  );
};

export default FormInput;

// Styled Components

const InputContainer = styled.div``;

const Input = styled.input`
  width: 35vw;
  padding: 1rem;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 10px 0 0 10px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.a`
  background: url("images/icon-arrow.svg") no-repeat center;
  font-size: 18px;
  background-color: #000;
  padding: 1rem 2rem;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
