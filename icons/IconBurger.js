import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const IconBurger = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M3 14H25"
          stroke="#25292C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 7H25"
          stroke="#25292C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3 21H25"
          stroke="#25292C"
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
export default IconBurger;
