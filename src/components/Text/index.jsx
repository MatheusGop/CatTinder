import React from 'react';

import { CustomText } from './styles';

export const Text = ({ children, ...rest }) => {
    return <CustomText {...rest}>{children}</CustomText>
}