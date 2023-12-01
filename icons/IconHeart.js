import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const IconHeart = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M14 23.625C14 23.625 3.0625 17.5 3.0625 10.0625C3.0625 8.7477 3.51804 7.4735 4.35162 6.4567C5.18519 5.4399 6.34531 4.74331 7.63459 4.48546C8.92387 4.2276 10.2627 4.4244 11.4232 5.04238C12.5837 5.66036 13.4943 6.66134 14 7.87501C14.5057 6.66134 15.4163 5.66036 16.5768 5.04238C17.7373 4.4244 19.0761 4.2276 20.3654 4.48546C21.6547 4.74331 22.8148 5.4399 23.6484 6.4567C24.482 7.4735 24.9375 8.7477 24.9375 10.0625C24.9375 17.5 14 23.625 14 23.625Z"
          stroke="#25292C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default IconHeart;
