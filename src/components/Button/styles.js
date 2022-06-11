import styled from 'styled-components/native';
import { theme } from '../../global';

export const CustomButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${theme.colors.white};
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    margin: 0 10px;
    elevation: 5;
`;