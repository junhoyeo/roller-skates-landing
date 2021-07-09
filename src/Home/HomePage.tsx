import React from 'react';
import styled from 'styled-components';

import { Header } from './sections/Header';
import { SkateColorPicker } from '../components/SkateColorPicker';

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <SkateColorPicker />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
