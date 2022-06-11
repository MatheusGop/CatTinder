import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigators'

export const Routes = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}