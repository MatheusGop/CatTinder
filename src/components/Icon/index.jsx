import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { svgs } from '../../common'

export const Icon = ({
    name,
    width = 16,
    height = 16,
    stroke,
    fill,
    onPress,
    ...rest
}) => {
    const xml = svgs[name];

    if (!!!xml) return null;

    if (!!onPress) {
        return (
            <TouchableOpacity onPress={onPress} {...rest}>
                <SvgXml width={width} height={height} stroke={stroke} fill={fill} xml={xml} />
            </TouchableOpacity>
        )
    }

    return (
        <SvgXml
            width={width}
            height={height}
            xml={xml}
            fill={fill}
            stroke={stroke}
        />
    );
}