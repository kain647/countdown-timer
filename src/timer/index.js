import React from "react";
import { useTimeLeft } from "./timer";
import {
  Container,
  HeaderContainer,
  Title,
  TimerContainer,
  Box,
  CardContainer,
  SpecialContainer,
  FooterContainer,
  FooterImage,
  Attribution
} from "./styles";
import Hills from "../images/pattern-hills.svg";

const Timer = () => {
  const { days, hours, minutes, seconds } = useTimeLeft();
  return (
    <Container>
      <HeaderContainer>
        <Title>the new year coming</Title>
        <TimerContainer>
          <SpecialContainer>
            <Box>
              <CardContainer>{days}</CardContainer>
              <p>days</p>
            </Box>
          </SpecialContainer>
          <SpecialContainer>
            <Box>
              <CardContainer>{hours}</CardContainer>
              <p>hours</p>
            </Box>
          </SpecialContainer>
          <SpecialContainer>
            <Box>
              <CardContainer>{minutes}</CardContainer>
              <p>minutes</p>
            </Box>
          </SpecialContainer>
          <SpecialContainer>
            <Box>
              <CardContainer>
                <span>{seconds}</span>
              </CardContainer>
              <p>seconds</p>
            </Box>
          </SpecialContainer>
        </TimerContainer>
      </HeaderContainer>
      <FooterContainer>
        <FooterImage src={Hills} />
      </FooterContainer>
      <Attribution>
        <span>Coded by</span>
        <a href="http://bit.ly/2JWko6l" target="_blank">
          Aleksey Amelchenko
        </a>
      </Attribution>
    </Container>
  );
};

export default Timer;
