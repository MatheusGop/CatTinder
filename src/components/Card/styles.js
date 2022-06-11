import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { theme } from '../../global'
import { Choice } from '../Choice'
import { Text } from '../Text'
import { width, height, CARD } from '../../utils'

export const Container = styled.View`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: ${CARD.CARD_HEIGHT}px;
  padding: 0 20px;
`;

export const ContainerDescription = styled.View`
  width: 280px;
  height: 55px;
  background-color: ${theme.colors.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-content: space-between;
`;

export const ContainerFirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-radius: ${CARD.CARD_BORDER_RADIUS}px;
`;

export const Name = styled(Text)`
  font-weight: bold;
`;

export const Origin = styled(Text)`
  font-size: 12px;
`;

export const Like = styled(Choice)`
  top: ${height * 0.12}px;
  left: ${width * 0.1}px;
  transform: rotate(-30deg);
`;

export const Nope = styled(Choice)`
  top: ${height * 0.12}px;
  right: ${width * 0.1}px;
  transform: rotate(30deg);
`;
