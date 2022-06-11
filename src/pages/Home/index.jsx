import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, View, PanResponder, ActivityIndicator } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Fontisto from 'react-native-vector-icons/Fontisto'

import { Card, Icon, Text } from '../../components'

import { theme } from "../../global"
import { getCatsByBreed, voteImage } from '../../repositories'
import { ACTION_OFFSET, CARD } from '../../utils/';

import { Container, ContainerLoading, ContainerTopBar, Footer, RoundButton, TopBarButton } from './styles'

export const Home = () => {
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    const [loading, setLoading] = useState(true);

    const [index, setIndex] = React.useState(0);

    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(0)

    const handleFetchCats = async () => {
        try {
            const cats = await getCatsByBreed(page);

            let catsReversed = cats.reverse();
            setCats(prevState => ([...catsReversed, ...prevState]))
        } catch (error) {
            showMessage({
                type: 'danger',
                message: `Ocorreu um erro ao listar os gatos!`,
                duration: 1250,
            })
        } finally {
            setLoading(false)
        }
    }

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, { dx, dy, y0 }) => {
                tiltSign.setValue(y0 > CARD.CARD_HEIGHT / 2 ? 1 : -1);
                swipe.setValue({ x: dx, y: dy });
            },
            onPanResponderRelease: (e, { dx, dy }) => {
                const direction = Math.sign(dx);
                const userAction = Math.abs(dx) > ACTION_OFFSET;

                if (userAction) {
                    Animated.timing(swipe, {
                        duration: 200,
                        toValue: {
                            x: direction * CARD.CARD_OUT_WIDTH,
                            y: dy,
                        },
                        useNativeDriver: true,
                    }).start(() => transitionNext(dx));
                } else {
                    Animated.spring(swipe, {
                        friction: 5,
                        toValue: {
                            x: 0,
                            y: 0,
                        },
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    const transitionNext = useCallback(async (direction) => {
        let cat = {}
        try {

            setCats((prevState) => {
                cat = prevState[prevState.length - 1]
                const slice = prevState.slice(0, -1)
                if (prevState.length <= 5) {
                    setPage(prevState => prevState + 1)
                }
                return slice
            });

            swipe.setValue({ x: 0, y: 0 });

            let data = {
                image_id: cat?.image?.id,
                value: direction >= 1 ? 1 : 0,
            }

            if (direction) {
                response = await voteImage(data);
            } else {
                response = await voteImage(data);
            }
        } catch (error) {
            showMessage({
                type: 'danger',
                message: `Ocorreu um erro ao dar ${direction >= 1 ? 'Like' : 'Nope'}!`,
                duration: 1000,
            })
            setCats(prevState => ([...prevState, cat]))
        }

    }, [swipe, cats, setCats]);

    const handleChoise = useCallback(
        (sign) => {
            Animated.timing(swipe.x, {
                duration: 500,
                toValue: sign * CARD.CARD_OUT_WIDTH,
                useNativeDriver: true,
            }).start(() => transitionNext(sign));
        },
        [swipe.x, transitionNext]
    );

    useEffect(() => {
        handleFetchCats();
    }, [page])

    return (
        <Container>
            {
                loading ?
                    <ContainerLoading>
                        <ActivityIndicator size="large" color="#000" />
                        <Text>Carregando gatinhos...</Text>
                    </ContainerLoading>
                    :
                    <>
                        <ContainerTopBar>
                            <TopBarButton
                                style={{
                                    backgroundColor: index === 0 ? theme.colors.white : theme.colors.lightGrey,
                                    zIndex: 1,
                                }}
                                onPress={() => setIndex(0)}
                            >
                                <Fontisto name='tinder' size={22} color={index === 0 ? theme.colors.pink : theme.colors.darkGrey} />
                            </TopBarButton>
                            <TopBarButton
                                style={{
                                    backgroundColor: index === 1 ? theme.colors.white : theme.colors.lightGrey
                                }}
                                onPress={() => setIndex(1)}
                            >
                                <Icon
                                    name={"Star"}
                                    width={22}
                                    height={22}
                                    stroke={index === 1 ? theme.colors.pink : theme.colors.darkGrey}
                                    fill={index === 1 ? theme.colors.pink : theme.colors.darkGrey}
                                />
                            </TopBarButton>
                        </ContainerTopBar>
                        <View style={{ height: CARD.CARD_HEIGHT }}>
                            {cats
                                .map((item, index) => {
                                    const isLast = index === cats.length - 1;

                                    const panHandlers = isLast ? panResponder.panHandlers : {};

                                    return (
                                        <Card
                                            key={item.name}
                                            cat={item}
                                            isLast={isLast}
                                            swipe={swipe}
                                            tiltSign={tiltSign}
                                            {...panHandlers}
                                        />
                                    );
                                })
                            }
                        </View>
                        <Footer>
                            <RoundButton onPress={() => handleChoise(-1)}>
                                <Icon name="Nope" width={35} height={35} fill={theme.colors.lightRed} stroke={theme.colors.lightRed} />
                            </RoundButton>
                            <RoundButton onPress={() => handleChoise(1)}>
                                <Icon name="Like" width={35} height={35} fill={theme.colors.lightGreen} stroke={theme.colors.lightGreen} />
                            </RoundButton>
                        </Footer>
                    </>
            }
        </Container>
    )
}