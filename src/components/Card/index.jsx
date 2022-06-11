import React from 'react';
import { Animated } from 'react-native';

import { ACTION_OFFSET } from '../../utils';

import {
    Container,
    ContainerDescription,
    ContainerFirstLine,
    Image,
    Name,
    Origin,
    Like,
    Nope
} from './styles';

export const Card = (
    {
        cat,
        setCat,
        isLast,
        swipe,
        tiltSign,
        ...rest
    }) => {
    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg'],
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [10, ACTION_OFFSET],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -10],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
    };

    return (
        <Container
            as={Animated.View}
            style={isLast && {
                ...animatedCardStyle, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 20,
            }}
            {...rest}
        >
            <Image source={{ uri: cat?.image?.url }} resizeMode="cover" />
            <ContainerDescription>
                <ContainerFirstLine>
                    <Name>{cat?.name}</Name>
                    <Name>{cat?.affection_level}</Name>
                </ContainerFirstLine>
                <Origin>{cat?.origin}</Origin>
            </ContainerDescription>
            {isLast && (
                <>
                    <Like type="like" style={{ opacity: likeOpacity }} />
                    <Nope type="nope" style={{ opacity: nopeOpacity }} />
                </>
            )}
        </Container>
    );
}
