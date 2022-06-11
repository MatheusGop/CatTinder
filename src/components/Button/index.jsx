import React from 'react';

import { CustomButton } from './styles';

export const Button = ({ children, onPress, ...rest }) => {
    return (
        <CustomButton onPress={onPress} {...rest}>
            {children}
        </CustomButton>
    )
}