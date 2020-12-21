import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-family: "Red Hat Text", sans-serif;
`;
export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: -100px;
  bottom: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 40px;
`;
export const TimerContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 180px));

  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
`;

export const SpecialContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    color: #8486a9;
    font-weight: 700;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 110px;
  background-color: transparent;
  position: relative;
  color: #fb6087;
  font-size: 66px;
  z-index: 0;
  span {
    animation: pulsing 1s infinite;
    @keyframes pulsing {
      0% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.1, 1.1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 49%;
    z-index: -1;
    border-radius: 5px;
  }

  &:after {
    top: 0;
    background-color: #2d2c44;
  }

  &:before {
    bottom: 0;
    background-color: #373450;
  }
`;
export const BoxTop = styled.div`
  display: flex;
  width: 110px;
  height: 55px;
  background: #2d2c44;
  border-radius: 5px;
`;
export const BoxBottom = styled.div`
  display: flex;
  width: 110px;
  height: 55px;
  background: #373450;
  border-radius: 5px;
`;
export const FooterContainer = styled.div`
  display: flex;
`;
export const FooterImage = styled.img`
  width: 100%;
  height: 20%;
  position: fixed;
  bottom: 0;
`;
export const Attribution = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  span {
    margin-right: 5px;
    color: #8486a9;
  }
  a {
    color: #8486a9;
    text-decoration: none;
  }
`;
