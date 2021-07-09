import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <Emoji src="/images/roller-skate-emoji.png" />
      <Title>
        <TitleSegment>The color module</TitleSegment>{' '}
        <TitleSegment>that all designers deserve</TitleSegment>
      </Title>
      <Tagline>@skates</Tagline>
      <Button>View in GitHub</Button>
      <ButtonReflection />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emoji = styled.img`
  margin-top: 64px;
  width: 148px;
  height: 148px;
  filter: drop-shadow(0px 4px 8px rgba(12, 26, 54, 0.3));
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleSegment = styled.span`
  margin: 0;
  text-align: center;
  background-image: linear-gradient(to bottom, #0c1a36, black);
  color: rgba(255, 255, 255, 0.92);
  font-size: 2.2rem;
  padding: 8px 12px;
  font-weight: 900;
  box-shadow: 0 8px 16px rgba(12, 26, 54, 0.45);

  &:first-child {
    z-index: 9;
  }
`;

const Tagline = styled.p`
  margin: 0;
  margin-top: 16px;
  font-weight: 900;
  text-align: center;
  color: black;
  font-size: 1.85rem;
`;

const Button = styled.button`
  margin-top: 36px;
  border-radius: 36px;
  font-size: 1.2rem;
  width: 220px;
  height: 62px;
  font-weight: bold;
  color: white;
  background-image: linear-gradient(to right, #ff5aaf, #6ffffd);
  text-shadow: 0 4px 16px rgba(97, 29, 119, 0.85);
  position: relative;
  transition: all 0.35s ease-in-out;
  z-index: 999;

  &:hover {
    transform: scale(1.08);
    text-shadow: 0 4px 16px rgba(97, 29, 119, 0.25);
  }
`;
const ButtonReflection = styled.div`
  width: 220px;
  height: 62px;
  border-radius: 36px;
  background-image: linear-gradient(to right, #ff73bb, #76fffd);
  opacity: 1;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:before {
    content: '';
    height: 100%;
    width: 224px;
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), white 50%);
    backdrop-filter: blur(64px);
    border-radius: 36px;
  }
`;
