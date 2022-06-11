import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, User, Chat } from '../../pages/';

import { BottomTab } from './BottomTab';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <BottomTab {...props} />}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Chat" component={Chat} />
            <Screen name="User" component={User} />
        </Navigator>
    )
}
