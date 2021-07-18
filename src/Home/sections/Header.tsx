import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const translateNormal = (x: number, y: number) =>
  `translate3d(${x / 24}px,${y / 24}px,0)`;
const translateSlow = (x: number, y: number) =>
  `translate3d(${x / 32}px,${y / 32}px,0)`;

export const Header = () => {
  const [{ position }, set] = useSpring(() => ({
    position: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const onMouseMoveInsideContainer = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({
        position: [
          x - window.innerWidth / 2, //
          y - window.innerHeight / 2,
        ],
      }),
    [],
  );

  return (
    <Container onMouseMove={onMouseMoveInsideContainer}>
      <Emoji
        src="/images/roller-skate-emoji.png"
        style={{ transform: position.to(translateNormal) }}
      />
      <Title style={{ transform: position.to(translateSlow) }}>
        <TitleSegment>The color module</TitleSegment>{' '}
        <TitleSegment>that all designers deserve</TitleSegment>
      </Title>
      <Description style={{ transform: position.to(translateNormal) }}>
        <Tagline>@roller-skates</Tagline>
        <Author href="https://github.com/junhoyeo" target="_blank">
          by @junhoyeo
        </Author>
      </Description>
      <AnimatedButtonContainer
        style={{ transform: position.to(translateNormal) }}
      >
        <a href="https://github.com/junhoyeo/roller-skates" target="_blank">
          <Button>View in GitHub</Button>
        </a>
        <ButtonReflection />
      </AnimatedButtonContainer>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emoji = styled(animated.img)`
  margin-top: 64px;
  width: 148px;
  height: 148px;
  filter: drop-shadow(0px 4px 8px rgba(12, 26, 54, 0.3));
`;

const Title = styled(animated.h1)`
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

const Description = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tagline = styled.p`
  margin: 0;
  margin-top: 16px;
  font-weight: 900;
  text-align: center;
  color: black;
  font-size: 1.85rem;
`;
const Author = styled.a`
  margin-top: 8px;
  font-weight: bold;
  font-size: 1.25rem;
  color: #ced4da;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #bdc1c5;
    transform: scale(1.05);
  }
`;

const AnimatedButtonContainer = styled(animated.div)``;
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

  &:before {
    content: '';
    height: 65px;
    width: 224px;
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), white 50%);
    border-radius: 36px;
  }
`;
