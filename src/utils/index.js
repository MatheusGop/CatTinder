import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const CARD = {
  CARD_WIDTH: width * 0.95,
  CARD_HEIGHT: height * 0.55,
  CARD_OUT_WIDTH: width + width * 0.9,
  CARD_BORDER_RADIUS: 20,
};

export const VERTICAL_MARGIN = height * 0.10;

export const ACTION_OFFSET = 100;
