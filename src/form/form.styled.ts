import styled from "styled-components";

export const Form1 = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const Input = styled.input<any>`
  width: 440px;
  height: 56px;
  background: #ffffff;
  /* border: 1px solid #5e54a4; */
  border-radius: 5px;
  padding-left: 20px;
  border: ${({ errors }) =>
    errors ? "2px solid #FF7979" : "1px solid #5e54a4"};
`;

export const Input1 = styled.input`
  width: 460px;
  height: 56px;

  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
`;

export const P1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  text-align: center;
  color: #bab7d4;
  display: flex;
`;

export const P2 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  text-align: center;
  color: #ff7979;
  margin-left: 5px;
`;

export const ErrorP = styled.p<any>`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #ff7979;
  margin-top: -15px;

  width: 100%;
  margin-right: 80px;
  display: ${({ errors }) => (errors ? "block" : "none")};
`;

export const Img = styled.img<any>`
  position: absolute;
  right: 10px;
  top: 15px;
  display: ${({ errors }) => (errors ? "block" : "none")};
`;
