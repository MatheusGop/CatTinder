import React from 'react';
import { Animated } from 'react-native';

import { Container, Text } from './styles';

export const Choice = ({ type, style }) => {
    return (
        <Container as={Animated.View} type={type} style={style}>
            <Text type={type}>{type}</Text>
        </Container>
    );
}