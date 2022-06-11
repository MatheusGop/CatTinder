import styled from 'styled-components/native';
import { theme } from '../../global'
import { Button } from '../../components';

export const Container = styled.View`
  flex: 1;
  background-Color: ${theme.colors.lightWhite};
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerTopBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 125px;
  height: 40px;
  background-color: ${theme.colors.lightGrey};
  padding: 5px;
  top: 5px;
  align-self: center;
  margin-bottom: 15px;
  border-radius: 100px;
  padding: 0;
`;

export const TopBarButton = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const RoundButton = styled(Button)`
  border-radius: 200px;
  shadow-offset: 0 0;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 4;
  margin: 50px 25px 0;
`;
