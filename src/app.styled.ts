import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  margin: 0 165px;
`;

//left div
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 55px;
  width: 525px;
  color: #ffffff;
`;

export const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  width: 425px;
  color: #ffffff;
`;

//right div

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  min-width: 540px;
  min-height: 646px;
`;

export const BlueDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.267857px;
  color: #ffffff;
`;

export const ValidationDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  min-height: 474px;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
`;
