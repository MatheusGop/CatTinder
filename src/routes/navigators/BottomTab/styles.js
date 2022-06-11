import styled from 'styled-components/native';
import { theme } from '../../../global';

export const Container = styled.View`
  background-color: ${theme.colors.white};
  width: 204px;
  position: absolute;
  bottom: 25px;
  height: 55px;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  border-radius: 36px;
`;
