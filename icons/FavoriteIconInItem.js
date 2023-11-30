import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const FavoriteIconInItem = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10 16C10 16 3 12.1818 3 7.54546C3 6.72584 3.29155 5.93153 3.82503 5.29768C4.35852 4.66383 5.101 4.2296 5.92614 4.06886C6.75128 3.90811 7.6081 4.0308 8.35084 4.41603C9.09359 4.80126 9.67635 5.42525 10 6.18182C10.3236 5.42525 10.9064 4.80126 11.6492 4.41603C12.3919 4.0308 13.2487 3.90811 14.0739 4.06886C14.899 4.2296 15.6415 4.66383 16.175 5.29768C16.7085 5.93153 17 6.72584 17 7.54546C17 12.1818 10 16 10 16Z"
          fill="white"
          stroke="white"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 16C10 16 3 12.1818 3 7.54546C3 6.72584 3.29155 5.93153 3.82503 5.29768C4.35852 4.66383 5.101 4.2296 5.92614 4.06886C6.75128 3.90811 7.6081 4.0308 8.35084 4.41603C9.09359 4.80126 9.67635 5.42525 10 6.18182C10.3236 5.42525 10.9064 4.80126 11.6492 4.41603C12.3919 4.0308 13.2487 3.90811 14.0739 4.06886C14.899 4.2296 15.6415 4.66383 16.175 5.29768C16.7085 5.93153 17 6.72584 17 7.54546C17 12.1818 10 16 10 16Z"
          fill="white"
          stroke="#98A3AA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
export default FavoriteIconInItem;
