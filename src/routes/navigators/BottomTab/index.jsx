import React from 'react';
import { Icon } from '../../../components';
import { theme } from '../../../global/theme';

import { Container } from './styles';

export const BottomTab = ({ state, descriptors, navigation }) => {
    const renderIcons = (index, isFocused, onPress) => {
        let Icons = {
            0: <Icon key={index} name="Pawn" fill={isFocused ? theme.colors.pink : theme.colors.darkGrey} width={25} height={25} onPress={onPress} />,
            1: <Icon key={index} name="Chat" stroke={isFocused ? theme.colors.pink : theme.colors.darkGrey} width={25} height={25} onPress={onPress} />,
            2: <Icon key={index} name="User" stroke={isFocused ? theme.colors.pink : theme.colors.darkGrey} width={25} height={25} onPress={onPress} />,
            default: null
        }

        return Icons[index] || Icons.default
    }

    return (
        <Container style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                }

                return (
                    renderIcons(index, isFocused, onPress)
                )
            })}
        </Container>
    )
}