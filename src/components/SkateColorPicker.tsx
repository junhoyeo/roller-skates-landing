import React from 'react';
import styled from 'styled-components';

export const SkateColorPicker = () => {
  return (
    <Container>
      <ColorPicker />
      <Information>
        <EyeDropper />
        <ColorRgb />
      </Information>
    </Container>
  );
};

const Container = styled.div``;

const ColorPicker = () => null;

const Information = styled.div``;

const EyeDropper = () => null;

const ColorRgb = () => null;
